const mongoose = require("mongoose")

const CustomerSchema = new mongoose.Schema({
  field: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  description: {type: String, required : true}
})

const Customer = mongoose.model("customerAcexis", CustomerSchema)

module.exports = {
  CustomerSchema,
  Customer
}
