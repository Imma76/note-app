/* eslint-disable class-methods-use-this */
import noteService from '../services/note.services.js';
import noteCategory from '../utils/utils.js';
import _ from 'lodash';
class NoteController {
  async getAllNotes(req, res) {
    const allNotes = await noteService.getNotes(req.params.email);
    if (_.isEmpty(allNotes)) {
      return res.status(200).send({ message: true, body:'no notes found' });
    }
    return res.status(200).send({ message: true, body: allNotes });
  }

  async postNewNote(req, res) {
    if (!noteCategory.includes(req.body.category)) {
      return res.status(400).send({ message: false, body: `category must be among ${noteCategory} ` });
    }
    const data = { title: req.body.title, content: req.body.content , category:req.body.category};
    await noteService.createNote(data);
    return res.status(201).send({ message: true, body: 'article posted successfully' });
  }

  async updateNote(req, res) {
    const data = { title: req.body.title, content: req.body.content, updatedAt: Date() };
    await noteService.updateNote(req.body.id, data);
    return res.status(201).send({ message: true, body: 'note updated successfully' });
  }

  async deleteNote(req, res) {
    const deleted = await noteService.deleteNote(req.body.id);
    console.log(deleted);
    return res.status(200).send({ message: true, body: 'note deleted succesfully' });
  }
}

export default new NoteController();
