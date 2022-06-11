import express from 'express'
import database from '../config/db.config.js'
const middleware = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    database();
}

export default middleware