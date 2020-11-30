const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27018/ecommerce-api', {useNewUrlParser: true, useUnifiedTopology: true});



// docker run -p 27018:27017 --rm --name api-db-mongo -d mongo
// https://jsonapi.org/