/* eslint-disable class-methods-use-this */
import noteService from '../services/note.services.js';

class NoteController {
  async getAllNotes(req, res) {
    const allNotes = noteService.getAllNotes();
    return res.status(200).send({ message: true, body: allNotes });
  }

  async postNewNote(req, res) {
    const data = { title: req.body.title, content: req.body.content };
    await noteService.createNote(data);
    return res.status(201).send({ message: true, body: 'article posted successfully' });
  }

  async updateNote() {

  }

  async deleteNote() {

  }
}

export default new NoteController();
