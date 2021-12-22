const controller = require('../controllers/user');

const express = require("express");

const userRoutes = express.Router();

userRoutes.route('/register').post(controller.register);

module.exports = userRoutes;