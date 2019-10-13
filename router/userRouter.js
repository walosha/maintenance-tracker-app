const express = require('express');

const authController = require('../controllers/authController');

const Router = express.Router();

Router.post('/signup', authController.signup);

module.exports = Router;
