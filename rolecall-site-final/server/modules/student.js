import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    teacherName: String

});

const student = mongoose.model('student', studentSchema);

export default student;