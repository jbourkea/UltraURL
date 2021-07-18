const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({path:"./.env"});

const app = express();
app.use(express.json());
app.use(cors);

var PORT = process.env.PORT || 8008;

app.listen(PORT, () => {
    console.log(`[Connection] Server is listening on port [${PORT}]`);
});

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}, (err) => {
    if(err) throw err;
    console.log("[Connection] MongoDB connection started")
}
)