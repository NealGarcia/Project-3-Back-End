const express = require('express');
const Employee = require('../db/models/Employee');

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', (req, res, next) => {
    Employee.find({})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/employee/:id', (req, res, next) => {
    Employee.findOne({_id: req.params.id})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.get('/search', (req, res, next) => {
    let query = {}
    const dayArr = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    const rq = req.query

    dayArr.forEach((param) => {
             if (rq[param]) query[`availability.${param}`] = rq[param]         
    });

    if(req.query.state) query["location.state"] = req.query.state
    if(req.query.city) query["location.city"] = req.query.city
    if(req.query.name) query["name"] = req.query.name
    if(req.query.age) query["age"] = {$gte: req.query.age}
    if(req.query.pay) query["pay"] = {$lte: req.query.pay}
    if(req.query.rating) query["rating"] = {$gte: req.query.rating}
    Employee.find(query)
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.post('/', (req, res, next) => {
    Employee.create(req.body)
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.delete('employee/:id', (req, res, next) => {
    Employee.findOneAndDelete({_id: req.params.id})
    .then(employee => res.json(employee))
    .catch(next)
});

EmployeeRouter.patch('employee/:id', (req, res, next) => {
    Employee.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(employee => res.json(employee))
    .catch(next)
});

module.exports = EmployeeRouter