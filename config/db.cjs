// connect mongoose to the DB
// later when we use mongoose somewhere else, it will already be connected!

const mongoose = require("mongoose");

const mongooseConnectionString = `mongodb+srv://lucaszemlin:${process.env.MONGO_PASS}@cluster0.acmh6rr.mongodb.net/Food?retryWrites=true&w=majority`

mongoose.connect(mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// log when the DB is connected

mongoose.connection.once('open', ()=> {
    console.log('connected to DATABASE');
  });

  