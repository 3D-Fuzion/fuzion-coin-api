import { listen } from './app.js'; 
import { connect } from 'mongoose';
require('dotenv').config(); 

const PORT = process.env.PORT || 3000; 

const DB_USER = "admin"
const DB_PASSWORD = encodeURIComponent('@Gui92720108')

listen(PORT, () => console.log('Server running on port ' + PORT)); 

connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@fuzion-db.umq4kca.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao Banco de Dados!')
    })
    .catch((err) => {
        console.log(err)
    })