const router = require('express').Router();
const randomwords = require('random-words');
const UrlModel = require('../models/urlModel.js');

// Add new url - User wants to add a new shortened url
// Validate the url being passed
// return a response with the new generated url (random)
// TODO: Add validation of the url being passed
router.post('/new', async (req, res) => {
    //TODO: add tests for valid URLS
    let uniqueCode = randomwords(3).join('');
    let isUnique = false;
    while(!isUnique){
        isUnique = UrlModel.exists({primaryKey:uniqueCode});
    }
    const newUrl = new UrlModel({
        timestamp : req.body.timestamp,
        redirectUrl : req.body.redirectUrl,
        userId : req.body.user,
        primaryKey : uniqueCode
    });
    await newUrl.save()
    console.log("[NEW URL] "+ uniqueCode + " has been added");
    return res.json({uniqueCode});
    


})

// Redirect url
// when passing in a code, the correct url should be returned, otherwise return error

router.get('/', async (req, res) => {
    const {code} = req.body;
    const returnValue = await UrlModel.findOne({primaryKey:code});
    if(!returnValue.redirectUrl){
        return res.status(404).json({error:"This url cannot be found"});
    }
    return res.json({url:returnValue.redirectUrl});
});


module.exports = router;