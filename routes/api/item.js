const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Item = require('../../models/Item');
 
const User = require('../../models/User');

// @route    POST api/ items
// @desc     Create a  item
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'name is required')
        .not()
        .isEmpty(),
        // check('code', 'code is required')
        // .not()
        // .isEmpty()
    ]
  ],
  async (req, res) => {
    // after auth 
    
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      // after auth 
      // const user = await User.findById(req.user.id).select('-password');
      console.log('sellp')
console.log(Number(req.body.baseSellPrice) + Number(req.body.taxRecv));
//const sp = Integer.parseInt(req.body.baseSellPrice)+Integer.parseInt(req.body.taxRecv);
//console.log("sp"+sp);

      const  newItem = new Item({
        // after auth 
        user: req.user.id,
        name: req.body.name,
        code: req.body.code,
        quantity: req.body.quantity,
        baseSellPrice: req.body.baseSellPrice,
        taxRecv: req.body.taxRecv,
        finalSellPrice:  Number(req.body.baseSellPrice) + Number(req.body.taxRecv),
        baseBuyPrice: req.body.baseBuyPrice,
        taxPaybl: req.body.taxPaybl,
        finalBuyPrice: req.body.finalBuyPrice ,
        MRP: req.body.MRP,
        HSN: req.body. HSN,
        discount : req.body.discount,
        category: req.body.category ,
      });

      const  item = await  newItem.save();
      console.log("disit"+newItem.discount);
      res.json( item);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/ items
// @desc     Get all  items
// @access   Private

// after auth in frontend
router.get('/', auth, async (req, res) => {
  // router.get('/', async (req, res) => {
  try {
    // after auth in frontend
    const  items = await Item.find({user: req.user.id}).sort({ date: -1 });
    // const  items = await Item.find().sort({ date: -1 });
    res.json( items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/ items/:id
// @desc     Get  item by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const  item = await Item.findById(req.params.id);

    // Check for ObjectId format and  item
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || ! item) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    res.json( item);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/ items/:id
// @desc     Delete a  item
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const  item = await Item.findById(req.params.id);

    // Check for ObjectId format and  item
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || ! item) {
      return res.status(404).json({ msg: 'Item not found' });
    }

    // Check user
    if ( item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await  item.remove();

    res.json({ msg: 'Item removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

 
 
module.exports = router;
