import { Manager } from '../models/Manager.js';

const logIn = async (req, res) => {  
    try 
    {
      const {email, password} = req.body; 
      const user = await Manager.findOne({email:email})
      console.log(user);
      if(user == null){
        res.status(200).json("Usuario Nao Encontrado")  
      } 
      else if(user.password == password) { 
        res.status(200).json("Login Realizado com Sucesso")  
      } 
      else if(user.password != password) { 
        res.status(200).json("Senha Incorreta")  
      }
    } 
    catch (error) 
    {
      res.status(500).json({error: error})
    }
}

const signIn = async (req, res) => {  
  try 
  {
    const {email, password} = req.body; 
    const newManager = { 
      email,
      password
    }
    const user = await Manager.create(newManager)
    res.status(200).json(user.id + " Criado com Sucesso!")
  } 
  catch (error) 
  {
    res.status(500).json({error: error})
  }
}

module.exports = {	
  logIn,
  signIn, 
}; 