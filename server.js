const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(require('./routes'));
//require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:Sheba1776@cluster0.f1agiti.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,  
    //useFindAndModify: false,
    useNewUrlParser: true,
});

mongoose.connection.once('open', function(){
    console.log('Connected');
}).on('error',function(error){
    console.log('Connection Error:')
});

mongoose.set('debug', true);


app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));