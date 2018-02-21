const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name: {
        type: String
    },
    email: {
        type: String
    },
    major: {
        type: String
    }

});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;