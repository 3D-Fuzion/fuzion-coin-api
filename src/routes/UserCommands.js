import { User } from '../models/User.js'

const GetAll = async function (req, res)  
{  
    try 
    {
      const user = await find()
      return res.status(200).json(user)
    } 
    catch (error) 
    {
      res.status(500).json({error: error})
    }
}

const Create = async function (req, res) 
{  
  try 
  {
    const {email, name, password} = req.body; 
    const newUser = {
      email,
      password,
      coin: 0
    }
    const user = await User.create(newUser)
    return res.status(200).json(user.id + " Criado com Sucesso!")
  } 
  catch (error) 
  {
    res.status(500).json({error: error})
  }
}

const LogIn = async function (req, res)
{  
  try 
  {
    const {email, password} = req.body; 
    const user = await findOne({email:email})
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

const ChangeCoinQuantity = async function (req, res)
{  
  try 
  {
    const {userId, newValue} = req.body; 
    const user = await findById(userId)
    user.coin = newValue; 
    user.save(); 
    res.status(200).json("Valor alterado para " + newValue)  
  } 
  catch (error) 
  {
    res.status(500).json({error: error})
  }
}

const Delete = async function (req, res) 
{  
  try 
  {
    const {userId} = req.params.id; 
    await deleteOne({id:userId})
    res.status(200).json("Usuario Removido")  
  } 
  catch (error) 
  {
    res.status(500).json({error: error})
  }
}

export const getAll = GetAll
export const create = Create
export const logIn = LogIn
export const changeCoinQuantity = ChangeCoinQuantity
export const remove = Delete
 