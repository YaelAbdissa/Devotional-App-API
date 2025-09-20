import express from 'express';
import { fetch, createUser, updateUser, deleteUser } from '../controller/userController.js';

const route = express.Router();



route.get('/getUsers', fetch);
route.post('/create', createUser);
route.put('/updateUser/:id', updateUser);
route.delete('/deleteUser/:id', deleteUser);


export default route;