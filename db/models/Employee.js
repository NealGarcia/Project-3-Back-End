const mongoose = require("../connection");

const EmployeeSchema = new mongoose.Schema(
    {
        name: { 
            type: String,
            required: true
        },
        age: { 
            type: Number,
            required: true
            },
        location: {
                    city: String,
                    state: String
                  },
                  img: {
                    url: {
                      type: String,
                      default:
                        "https://thumbs.dreamstime.com/b/no-user-profile-picture-24185395.jpg",
                    },
                    title: String,
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
        availabilgitity: {
                mon: {type: Boolean,
                default: false},
                tue: {type: Boolean,
                default: false},
                wed: {type: Boolean,
                  default: false},
                thu: {type: Boolean,
                  default: false},
                fri: {type: Boolean,
                  default: false},
                sat: {type: Boolean,
                  default: false},
                sun: {type: Boolean,
                  default: false}
                },
        pay: {
                type: Number
              },
        rating: {
                    type: Number,
                    min: 0,
                    max: 5
                }
            },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
