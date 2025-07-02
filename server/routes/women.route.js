import express from 'express';
const router = express.Router();


import { registerWomanController, getAttendanceWomenController, getWomenController, markAttendanceWomenController, updateWomanController } from '../controllers/women.controller.js';

router.post('/register', registerWomanController);
router.get('/attendance', getAttendanceWomenController);
router.get('/', getWomenController);
router.post('/attendance/mark', markAttendanceWomenController);
router.put('/:womanId', updateWomanController);

export default router;