const mongoose = require("mongoose"); 
const mongoURI = "mongodb://localhost:27017/mongo-practice"; // the mongo-practice is the name of the db we're gon' create below. 

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log("Connected to MongoDB JRF");
}) 
    .catch((err) => { console.log("Error in db connection", err); 
}); 
