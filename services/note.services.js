import notes from '../models/note.model.js';

const getNotes = () => notes.find({});

const updateNote = (id, data) => {
  const update = notes.updateOne({ _id: id }, data, { runValidators: true });
  return update;
};

const createNote = (note) => {
  const create = notes.create(note);
  console.log(create);
  return create;
};

const deleteNote = (id) => {
  const deletenote = notes.deleteOne({ _id: id });
};

export default {
    getNotes,
    createNote,
    deleteNote,
    updateNote,
};
