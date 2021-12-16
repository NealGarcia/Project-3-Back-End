const mongoose = require('../connection');

const EmployeeSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        location: {
                    city: String,
                    state: String
                  },
        img: {
                url: String,
                title: String
             },
        skills: [String],
        workHistory: [{ title: String, company: String }],
        contact: {
                    phone: String,
                    email: String
                },
        openForWork: {
                        type: Boolean
                        }, 
        availability: {
                mon: {type: Boolean},
                tue: {type: Boolean},
                wed: {type: Boolean},
                thu: {type: Boolean},
                fri: {type: Boolean},
                sat: {type: Boolean},
                sun: {type: Boolean}
                },
        minPay: Number,
        rating: {
                    type: Number,
                    min: 0,
                    max: 5
                }
    },
    {timestamps: true}
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;