const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/embedded", {useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology: true })
.then(() => console.log('Successfully connected to the database'))
.catch(error => console.log('Could not connect to the database'))