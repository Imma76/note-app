import mongoose from 'mongoose';

const noteModel = mongoose.Schema({

  title: {

    required: true,

    type: String

  },
  content: {
    required: true,

    type: String
  },
  createdAt: Date.now,
  updatedAt: {
    required: false
  }

});

const notes = mongoose.model('notes', noteModel);

export default notes;
