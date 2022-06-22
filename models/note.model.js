import mongoose from 'mongoose';

const noteModel = mongoose.Schema({
  category: {
    required: true,
    type: String
  },
  title: {

    required: true,

    type: String

  },
  content: {
    required: true,

    type: String
  },
  email: {
    type: String
  }

}, { timestamps: true });

const notes = mongoose.model('notes', noteModel);

export default notes;
