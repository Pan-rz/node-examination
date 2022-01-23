module.exports = function(){
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/myMongoDB',{ useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('error', () => {
        console.log('connect error!!!');
    })
    mongoose.connection.once('open',() => {
        console.log('connect success!!!');
    })
}