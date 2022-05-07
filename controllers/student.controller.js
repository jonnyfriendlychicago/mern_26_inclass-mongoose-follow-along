// below-created-from-air 
const Student = require('../models/student.model'); 

const createStudent = (request, response) => {
    Student.create(request.body)
    .then((newStudent) => {
        response.status(201).json(newStudent); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const getStudents = (request, response) => {
    Student.find({})
    .then((students) => {
        response.json(students); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const getStudentById = (request, response) => {
    // Student.find({ "_id": request.params.id })
    // above-is-one-way-to-do-it , Mach recommends below instead.  but above is required if searching by another field.  
    Student.findById(request.params.id )
    .then((student) => {
        response.json(student); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const updateStudent = (request, response) => {
    Student.findByIdAndUpdate (request.params.id, request.body , {new: true} )
    .then((student) => {
        response.json(student); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

const deleteStudent = (request, response) => {
    Student.findByIdAndDelete(request.params.id )
    .then((student) => {
        response.json(student); 
    })
    .catch((err) => {
        response.status(500).json(err); 
    }); 
}; 

module.exports = {
    createStudent, 
    getStudents, 
    getStudentById, 
    updateStudent, 
    deleteStudent
};