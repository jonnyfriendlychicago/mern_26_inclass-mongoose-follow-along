// line below required on model and config
const mongoose = require("mongoose"); 

const StudentSchema = mongoose.Schema (
    {
        name: String
        , email: String
        , age: Number
        , currentStack: String
        , isActive: Boolean 
    }, 
    {
        timestamp: true
    }
); 

const Student = mongoose.model('Student', StudentSchema); 
// below added to enable modularization
module.exports = Student; 