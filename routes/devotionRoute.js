import express from 'express';
import { fetch, createDevotion, updateDevotion, deleteDevotion, fetchDevotionById } from '../controller/devotionController.js';

const route = express.Router();



route.get('/getDevotions', fetch);
route.get('/', fetch);
route.get('/:id', fetchDevotionById);
route.post('/create', createDevotion);
route.put('/updateDevotion/:id', updateDevotion);
route.delete('/deleteDevotion/:id', deleteDevotion);


export default route;