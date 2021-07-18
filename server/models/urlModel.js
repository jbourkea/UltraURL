const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
    {
        redirectUrl : {type : String, required : true},
        timestamp: {type : Date},
        userId : {type: String},
        primaryKey : {type: String, required : true}
    }
);

module.exports = Url = mongoose.model("url", urlSchema);