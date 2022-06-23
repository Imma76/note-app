import express from 'express';
import database from '../config/db.config.js';
import errorHandler from './error.handler.js';
import noteRouter from '../routes/notes.routes.js';
import router from '../routes/index.routes.js';
import compression from 'compression';


const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);
  //app.use(compression);
  database();
  app.use(errorHandler);
};

export default middleware;
