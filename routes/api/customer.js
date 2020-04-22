const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const   Customer = require('../../models/Customer');
 
const User = require('../../models/User');

// @route    POST api/  customers
// @desc     Create a    customer
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('email', 'email is required')
        .not()
        .isEmpty(),
        check('phoneNum', 'phoneNum is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const user = await User.findById(req.user.id).select('-password');

      const   newCustomer = new   Customer({
        user: req.user.id,
        name: req.body.name,
        gender: req.body.gender,
        age:req.body.age,
        email: req.body.email,
        phoneNum: req.body.phoneNum,
        address: req.body.address,
        pyble: req.body.pyble,
        recble: req.body.pyble
      });

      const    customer = await   newCustomer.save();

      res.json(   customer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/  customers
// @desc     Get all   customers
// @access   Private

// after auth
router.get('/', auth, async (req, res) => {
  // router.get('/',  async (req, res) => {
  try {
     
    const   customers = await   Customer.find({user: req.user.id}).sort({ name: 1 }); 
    // const   customers = await   Customer.find().sort({ date: 1 }); 
    res.json(  customers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/  customers/:id
// @desc     Get    customer by ID
// @access   Private

// after auth
// router.get('/:id', auth, async (req, res) => {

  router.get('/:id',  async (req, res) => {
  try {
    const    customer = await   Customer.findById(req.params.id);

    // Check for ObjectId format and    customer
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !   customer) {
      return res.status(404).json({ msg: '  Customer not found' });
    }

    res.json(   customer);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/  customers/:id
// @desc     Delete a    customer
// @access   Private

// after auth 
// router.delete('/:id', auth, async (req, res) => {
  
  router.delete('/:id',  async (req, res) => {
  try {
    const    customer = await   Customer.findById(req.params.id);

    // Check for ObjectId format and    customer
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !   customer) {
      return res.status(404).json({ msg: '  Customer not found' });
    }

    // Check user
    // if (   customer.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }

    await    customer.remove();

    res.json({ msg: '  Customer removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


module.exports = router;