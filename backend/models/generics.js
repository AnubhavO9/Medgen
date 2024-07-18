const mongoose = require('mongoose');

const genericSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
        },
        code : {
            type : String,
            required : true,
        },
        salt : {
            type : String,
            required : true,
        },
        batch : {
            type : Number,
            required : true,
        },
        price : {
            type :Number ,
            required: true,
        }
    }
);

module.exports = mongoose.model('Generic',genericSchema);
