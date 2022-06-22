const controller = require('../controllers/record');

const express = require("express");
const { get } = require('mongoose');

const recordRoutes = express.Router();

recordRoutes.route('/records/create').post(controller.create);
recordRoutes.route('/records/').get(controller.findAll);
recordRoutes.route('/records/:id').get(controller.findOne);
recordRoutes.route('/records/:id').put(controller.update);
recordRoutes.route('/records/:id').delete(controller.delete);

module.exports = recordRoutes;