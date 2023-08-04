const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); 
const app = express(); 
const DB_USER = "admin"
const DB_PASSWORD = encodeURIComponent('@Gui92720108')

require('dotenv').config(); 

const PORT = process.env.PORT || 3333; 

app.use(
    express.urlencoded({
        extended:true
    }
    )
)
app.use(cors({
    origin: "*"
}))
app.use(express.json())

const userRoutes = require('./routes/UserRoutes')

app.use("/user", userRoutes); 
app.use("/", userRoutes); 

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@fuzion-db.umq4kca.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao Banco de Dados!')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(PORT, () => console.log("Server rodando na porta " + PORT))