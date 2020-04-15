const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubjectLabSchema = new Schema({
    Number: { type: Number, required: true },
    Question: { type: String, required: true }
  } ,{
        collection: 'modalContent'
      });

module.exports = mongoose.model('SubjectLab', SubjectLabSchema);