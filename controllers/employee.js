const express = require('express');
const Employee = require('../db/models/Employee');

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', (req, res, next) => {
    Employee.find({})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/:id', (req, res, next) => {
    Employee.findOne({_id: req.params.id})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.post('/', (req, res, next) => {
    Employee.create(req.body)
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.delete('/:id', (req, res, next) => {
    Employee.findOneAndDelete({_id: req.params.id})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.patch('/:id', (req, res, next) => {
    Employee.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(employee => res.json(employee))
    .catch(next)
})


module.exports = EmployeeRouter