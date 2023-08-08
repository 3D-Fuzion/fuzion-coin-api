import { getAll, create, logIn, remove, changeCoinQuantity } from './routes/UserCommands.js';
import { logIn as _logIn, signIn } from './routes/ManagerCommands.js';
import { Router } from 'express';
const router = Router()

router.get('/user', getAll); 
router.post('/user', create); 
router.post('/user/login', logIn);
router.delete('/user/:id', remove); 
router.post('/login', _logIn); 
router.post('/manager', signIn); 
router.post('/manager/changecoin', changeCoinQuantity); 

export default router; 