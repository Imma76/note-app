import express from 'express'

const middleware = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    
}

export default middleware