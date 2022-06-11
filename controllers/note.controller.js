import noteService from '../services/note.services.js';

class NoteController {
    async getAllNotes() {
        const allNotes = noteService.getAllNotes();
        return resizeBy.status(200).send({ message: true, body: allNotes });
  }

  async postNewNote() {

  }

  async updateNote() {

  }

  async deleteNote() {

  }
}

export default new NoteController();
