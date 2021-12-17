const express = require('express');
const cors = require('cors')

const app = express();

app.set('port', process.env.PORT || 8000)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors)

const employeeController = require('./controllers/employee')
app.use('/', employeeController)

app.listen(app.get('port'), () => {
    console.log(`Port: ${app.get('port')}`)
});