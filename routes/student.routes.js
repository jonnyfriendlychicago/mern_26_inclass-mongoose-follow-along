// line-below-added-from-air 
const StudentController = require("../controllers/student.controller"); 

module.exports = (app) => {
// below-is-route-collection-cut-pasted-from-server.js, then we slice/dice it as shown
    app.post("/api/students",
    // line-below-added-to-bring-in-code-from-controllers
    StudentController.createStudent
    ); 

    app.get("/api/students", StudentController.getStudents); 
    app.get("/api/students/:id", StudentController.getStudentById); 
    app.put("/api/students/:id", StudentController.updateStudent); 
    app.delete("/api/students/:id", StudentController.deleteStudent); 
};


// below-moved-to-controllers
// (request, response) => {
//     Student.create(request.body)
//     .then((newStudent) => {
//         response.status(201).json(newStudent); 
//     })
//     .catch((err) => {
//         response.status(500).json(err); 
//     }); 
// }; 

// (request, response) => {
//     Student.find({})
//     .then((students) => {
//         response.json(students); 
//     })
//     .catch((err) => {
//         response.status(500).json(err); 
//     }); 
// }; 