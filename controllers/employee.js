const express = require('express');
const Employee = require('../db/models/Employee');

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', (req, res, next) => {
    Employee.find({})
    .then(employee => res.json(employee))
    .catch(next)
});

module.exports = EmployeeRouter