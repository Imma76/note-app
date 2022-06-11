import notes from '../models/note.model.js';

const getNotes = () => notes.find({});

const updateNote = (id) => {
    const update = notes.updateOne({})
};

const createNote = (note) => {
  const create = notes.create(note);
  return create;
};

const deleteNote = (id) => {
 const deletenote = notes.deleteOne({ _id: id });
};

export default getNotes;
