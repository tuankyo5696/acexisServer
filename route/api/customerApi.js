const express = require("express")
const router = express.Router()

const { CustomerService } = require("./../../services/customerServices")

router.post("/", (rq, response) => {
  return CustomerService.createCustomers(rq.body)
    .then(res => {
      if (res) {
        response.json(res)
      } else {
        response.status(500).json({ msg: "customer existed" })
      }
    })
    .catch(err => {
      response.status(500).json({ msg: err })
    })
})

router.get("/", (rq, response) => {
  return CustomerService.findAllCustomer()
    .then(res => {
      response.json(res)
    })
    .catch(err => {
      response.status(500).json({ msg: err })
    })
})

router.delete("/", (rq, response) => {
  return CustomerService.deleteCustomers(rq.body.idArr)
    .then(res => {
      response.json({ msg: "Delete Successfully!" })
    })
    .catch(err => {
      response.status(500).json({ msg: err })
    })
})
router.put("/", (rq, response) => {
  return CustomerService.findCustomerByEmail(rq.body.email)
    .then(res => {
      if (!res || res._id == rq.body._id) {
        return CustomerService.editCustomers(rq.body)
      } else throw "Email existed"
    })
    .then(res => {
      response.json(res)
    })
    .catch(err => {
      response.status(500).json({ msg: err })
    })
})

module.exports = router
