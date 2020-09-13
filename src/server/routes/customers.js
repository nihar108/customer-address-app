const router = require('express').Router();
const Customer = require('../models/customers');
const Address = require('../models/addresses');

router.route('/').get((req, res) => {
  Customer
    .find()
    .select('id name age gender')
    .then(customers => res.json(customers))
    .catch(error => res.status(400).json(error));
});

router.route('/').post((req, res) => {
  const {
    id,
    name,
    age,
    gender
  } = req.body;

  const newCustomer = new Customer({
    id, 
    name, 
    age, 
    gender
  });

  newCustomer.save()
    .then(() => res.json('Customer successfully added'))
    .catch(error => res.status(400).json(error));
});

router.route('/:id/addresses').get((req, res) => {
  Address
    .find({
      customerId: req.params.id
    })
    .select('address city state pin country type')
    .then(addresses => res.json(addresses))
    .catch(error => res.status(400).json(error));
});

router.route('/:id/addresses').post((req, res) => {
  const {
    address,
    city,
    state,
    pin,
    country,
    type
  } = req.body;

  const newAddress = new Address({
    customerId: req.params.id,
    address,
    city,
    state,
    pin,
    country,
    type
  });

  newAddress.save()
    .then(() => res.json('Address successfully added'))
    .catch(error => res.status(400).json(error));
});

module.exports = router;