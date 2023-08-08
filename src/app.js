import express, { json } from 'express'; 
import router from './router.js'; 
const app = express(); 

app.use(json());
app.use(router); 

export default app; 