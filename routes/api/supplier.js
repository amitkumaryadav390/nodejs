const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const  Supplier = require('../../models/Supplier');
 
const User = require('../../models/User');

// @route    POST api/  suppliers
// @desc     Create a   supplier
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('companyName', 'companyName is required')
        .not()
        .isEmpty(),
        check('personName', 'personName is required')
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
      // const user = await User.findById(req.user.id).select('-password');

      const   newSupplier = new  Supplier({
        user: req.user.id,
        companyName: req.body.companyName,
        personName: req.body.personName,
        email: req.body.email,
        phoneNum: req.body.phoneNum,
        address: req.body.address,
        pyble: req.body.pyble,
        recble: req.body.pyble
      });

      const   supplier = await   newSupplier.save();

      res.json(  supplier);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/  suppliers
// @desc     Get all   suppliers
// @access   Private

// after frontend auth 
router.get('/', auth, async (req, res) => {
  // router.get('/', async (req, res) => {
  try {
    const   suppliers = await  Supplier.find({user: req.user.id}).sort({ date: -1 });
    res.json(  suppliers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/  suppliers/:id
// @desc     Get   supplier by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const   supplier = await  Supplier.findById(req.params.id);

    // Check for ObjectId format and   supplier
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !  supplier) {
      return res.status(404).json({ msg: ' Supplier not found' });
    }

    res.json(  supplier);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/  suppliers/:id
// @desc     Delete a   supplier
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const   supplier = await  Supplier.findById(req.params.id);

    // Check for ObjectId format and   supplier
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !  supplier) {
      return res.status(404).json({ msg: ' Supplier not found' });
    }

    // Check user
    if (  supplier.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await   supplier.remove();

    res.json({ msg: ' Supplier removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});


module.exports = router;