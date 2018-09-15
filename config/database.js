const mongoose = require('mongoose');

const mongoUrl = "mongodb://osor1o:Senha123@ds257752.mlab.com:57752/books";

const connect = () => mongoose.connect(mongoUrl);

module.exports = {connect};