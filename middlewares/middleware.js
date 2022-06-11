import express from 'express';
import database from '../config/db.config.js';
import errorHanlder from './error.handler.js';

const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  database();
  app.use(errorHanlder);
};

export default middleware;
