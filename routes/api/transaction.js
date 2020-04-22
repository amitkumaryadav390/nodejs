const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const Transaction = require('../../models/Transaction');
const Item = require('../../models/Item');
const User = require('../../models/User');

// @route    POST api/   transaction
// @desc     Create a transaction
// @access   Private
router.post(
  '/customer',
  [
    auth,
    // [
    //   check('name', 'Name is required')
    //     .not()
    //     .isEmpty(),
    //     check('phoneNum', 'phoneNum is required')
    //     .not()
    //     .isEmpty()
    // ]
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
     
      const user = await User.findById(req.user.id).select('-password');
      let tempItems = req.body;
      let   newTransaction = new    Transaction({
        user: req.user.id,
        // customerName: req.body.name,
        // customerPhoneNum: req.body.phoneNum,
        // address: req.body.address,
        items:[]
      });
          
          const modifiedItem = tempItems.map(  async (item) =>{
             newTransaction.items.push(item);
            var argu =  {
              code:item.code,
              user:req.user.id
            };
        console.log(argu);
        const newItem = await  Item.find(argu); 
        // console.log("backend data");
        // console.log(newItem);
        // console.log("front end data");
        // console.log(item);
        
         const updatedQuantity = newItem[0].quantity - item.quantity;
        //  console.log("privious quantity");
        //  console.log(newItem[0].quantity);
        //  console.log("updatedQuantity");
        //  console.log(updatedQuantity);
        //    Item.updateOne(
        //    argu,
        //    {$set:
        //   {quantity:updatedQuantity},
        //    }
        // )s
        await Item.updateOne(argu,{ "$inc": { "quantity": -item.quantity } });
        
        }
      )
      const transaction = await   newTransaction.save();
      console.log(transaction);
      res.json(transaction);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);


router.post(
  '/supplier',
  [
    auth,
    // [
    //   check('name', 'Name is required')
    //     .not()
    //     .isEmpty(),
    //     check('phoneNum', 'phoneNum is required')
    //     .not()
    //     .isEmpty()
    // ]
  ],
  async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }
    try {
     
      const user = await User.findById(req.user.id).select('-password');
      let tempItems = req.body;
      let   newTransaction = new    Transaction({
        user: req.user.id,
        // customerName: req.body.name,
        // customerPhoneNum: req.body.phoneNum,
        // address: req.body.address,
        items:[]
      });
          
          const modifiedItem = tempItems.map(  async (item) =>{
             newTransaction.items.push(item);
            var argu =  {
              code:item.code,
              user:req.user.id
            };
        console.log(argu);
        const newItem = await  Item.find(argu); 
        // console.log("backend data");
        // console.log(newItem);
        // console.log("front end data");
        // console.log(item);
        
         const updatedQuantity = newItem[0].quantity - item.quantity;
        //  console.log("privious quantity");
        //  console.log(newItem[0].quantity);
        //  console.log("updatedQuantity");
        //  console.log(updatedQuantity);
           Item.update(
           argu,
           {$set:
          {quantity:updatedQuantity},
           }
        )
        await Item.update(argu,{ "$inc": { "quantity": item.quantity } });
        
        }
      )
      const transaction = await   newTransaction.save();

      res.json(transaction);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);









// @route    GET api/   transaction
// @desc     Get all    transaction
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const    transaction = await    Transaction.find({user: req.user.id}).sort({ date: -1 });
    res.json(   transaction);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/   transaction/:id
// @desc     Get transaction by ID
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const transaction = await    Transaction.findById(req.params.id);

    // Check for ObjectId format and transaction
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !transaction) {
      return res.status(404).json({ msg: '   Transaction not found' });
    }

    res.json(transaction);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// // @route    DELETE api/   transaction/:id
// // @desc     Delete a transaction
// // @access   Private
// router.delete('/:id', auth, async (req, res) => {
//   try {
//     const transaction = await    Transaction.findById(req.params.id);

//     // Check for ObjectId format and transaction
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !transaction) {
//       return res.status(404).json({ msg: '   Transaction not found' });
//     }

//     // Check user
//     if (transaction.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'User not authorized' });
//     }

//     await transaction.remove();

//     res.json({ msg: '   Transaction removed' });
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });


module.exports = router;