const router = require('express').Router();
const Address = require('../models/addresses');

router.route('/').get((req, res) => {
  Address.find()
    .then(addresses => res.json(addresses))
    .catch(error => res.status(400).json(error));
});

module.exports = router;