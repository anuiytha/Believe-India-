const jwt = require('jsonwebtoken')
const bcrypt = require('bycrypt')
const loginRouter = require('express').Router()
const User = require('../models/users')

loginRouter.post('/', async (request, response) => {
    const { username, password } = request.body

    const user = await User.findOne({ username })
    const passwordCorrect = user == null ? false : await bcrypt.compare(password, user.passwordHash)
})