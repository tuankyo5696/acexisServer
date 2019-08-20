const { Customer } = require('./../models/customer');

const CustomerService = {
  createCustomers: ({ field, email, phone, company, firstName, lastName }) => {
    return CustomerService.findCustomerByEmail(email).then((res) => {
      if (!res) {
        const newCustomer = new Customer({
          field,
          email: email.trim().toLowerCase(),
          phone,
          company,
          firstName,
          lastName,
        });
        return newCustomer.save();
      }
      return false;
    });
  },
  findAllCustomer: () => {
    return Customer.find({});
  },
  findCustomerByEmail: (email) => {
    return Customer.findOne({ email: email.trim().toLowerCase() });
  },
  deleteCustomers: (idArr) => {
    return Customer.deleteMany({ _id: { $in: [...idArr] } });
  },
  editCustomers: ({ _id, field, email, phone, company, firstName, lastName }) => {
    return Customer.findById(_id).then((customer) => {
      const newCustomer = {
        field,
        email,
        phone,
        company,
        firstName,
        lastName,
      };
      for (let key in newCustomer) {
        customer[key] = newCustomer[key];
      }
      return customer.save();
    });
  },
};
module.exports = {
  CustomerService,
};
