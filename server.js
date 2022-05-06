const express = require("express"); 
const app = express(); 

const mongoose = require("mongoose"); 

const port = 8000; 
const mongoURI = "mongodb://localhost:27017/mongo-practice"; // the mongo-practice is the name of the db we're gon' create below. 

// below is "body parser"
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log("Connected to MongoDB JRF");
}) 
    .catch((err) => { console.log("Error in db connection", err); 
}); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const StudentSchema = mongoose.Schema ({
    name: String
    , email: String
    , age: Number
    , currentStack: String
    , isActive: Boolean 
}, {
    timestamp: true
}
); 

const Student = mongoose.model('Student', StudentSchema); 

app.post("/api/students", (request, response) => {
    Student.create(request.body)
    .then((newStudent) => {
        response.status(201).json(newStudent); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}); 

app.get("/api/students", (request, response) => {
    Student.find({})
    .then((students) => {
        response.json(students); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Server up on {port}.  Rack em.`)
});

