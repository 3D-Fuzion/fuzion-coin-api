const router = require('express').Router();
const User = require('../../models/User')

router.post('/create', async (req, res) => { 
    const {name, password} = req.body 
    const coin = 0
    const user = { 
        name, 
        password,
        coin
    }

    try {
        await  User.create(user)    

        res.status(201).json({message: 'Usuario Inserido'}) 
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOne({_id: id})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router