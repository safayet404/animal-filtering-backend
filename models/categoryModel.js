const mongoose = require('mongoose');

var categoryModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('Category', categoryModel);