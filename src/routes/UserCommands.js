import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
const SECRET = "9817236498172346981237";

export const VerifyToken = async function (req, res, next) {
  const token = req.headers["x-acess-token"];
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end();
    req.userId = decoded.userEmail;
    next();
  });
};

export const GetAll = async function (req, res) {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const Create = async function (req, res) {
  try {
    const { email, name, password, cpf } = req.body;
    const newUser = {
      email,
      name,
      cpf,
      password,
      coin: 0,
    };
    const user = await User.create(newUser);
    return res.status(200).json(user.id + " Criado com Sucesso!");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const LogIn = async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user == null) {
      res.status(404).json("Usuario Nao Encontrado");
    } else if (user.password == password) {
      const token = jwt.sign({ userEmail: user.email }, SECRET, {
        expiresIn: 120,
      });
      res.status(200).json({
        message: "Login Realizado com Sucesso",
        token: token,
        id: user.id,
      });
    } else if (user.password != password) {
      res.status(400).json("Senha Incorreta");
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const GetCoin = async function (req, res) {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (user == null) {
      res.status(200).json("Usuario Nao Encontrado");
    } else {
      res.status(200).json({ coin: user.coin });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const AddCoin = async function (req, res) {
  try {
    const { userId, newValue } = req.body;
    const user = await User.findById(userId);
    user.coin += Number(newValue);
    user.save();
    res.status(200).json(newValue + " Adicionado");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const RemoveCoin = async function (req, res) {
  try {
    const { userId, newValue } = req.body;
    const user = await User.findById(userId);
    user.coin -= Number(newValue);
    user.save();
    res.status(200).json(newValue + " Removido");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const Delete = async function (req, res) {
  try {
    const { userId } = req.params.id;
    await User.deleteOne({ id: userId });
    res.status(200).json("Usuario Removido");
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
