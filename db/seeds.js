const Employee = require('./models/Employee');

const employees = require('./employee-seeds.json');

Employee.deleteMany({})
    .then(() => Employee.insertMany(employees))
    .then(console.log)
    .catch(console.error)
    .finally(process.exit);
