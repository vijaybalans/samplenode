const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
	Name:{type: String},
    Address:{type: String}
});


module.exports = { Student: mongoose.model('student', StudentSchema) };