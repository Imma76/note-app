import express from 'express';
import noteRouter from './notes.routes.js';
import userRouter from './user.route.js';

const router = express.Router();

router.use('/note-app', noteRouter);
router.use('/note-user', userRouter);

export default router;
