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
  createdAt: {
    default: Date(),  type: Date
  },

  updatedAt: {
    required: false,
    
  }

});

const notes = mongoose.model('notes', noteModel);

export default notes;
