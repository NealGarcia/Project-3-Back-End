const express = require('express');
const Employee = require('../db/models/Employee');

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', (req, res, next) => {
    Employee.find({})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('id/:id', (req, res, next) => {
    Employee.findOne({_id: req.params.id})
    .then(employee => res.json(employee))
    .catch(next)
});``

EmployeeRouter.get('/name/:name', (req, res, next) => {
    Employee.find({name: req.params.name})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/state/:state', (req, res, next) => {
    Employee.find({"location.state": req.params.state})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/state/:state/:city', (req, res, next) => {
    Employee.find({"location.state": req.params.state, "location.city": req.params.city})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/minAge/:age', (req, res, next) => {
    Employee.find({age: {$gte: req.params.age}})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/minPay/:pay', (req, res, next) => {
    Employee.find({pay: {$lte: req.params.pay}})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/minRating/:rating', (req, res, next) => {
    Employee.find({rating: {$gte: req.params.rating}})
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
});

module.exports = EmployeeRouter