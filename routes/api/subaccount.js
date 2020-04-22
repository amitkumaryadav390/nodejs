const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
// get all subaccount of master user
router.get('/',auth,async(req,res) => {
   try {
    const user = await User.find({owner:req.user.id}).select('-password');
    console.log(user);
    res.json(user );
   } catch ( err) {
    console.error(err.message);
    res.status(500).send('Server Error'); 
   }
})


// change permission for adding Item by master account
router.post('/addItem/:id',auth,async(req,res) =>{
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{addItem: Boolean(!account[0].addItem)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});



// change permission for seeing Item by master account
router.post('/seeItem/:id',auth,async(req,res) =>{
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{seeItem: Boolean(!account[0].seeItem)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});



// change permission for adding customer by master account
router.post('/addCustomer/:id',auth,async(req,res) =>{
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{addCustomer: Boolean(!account[0].addCustomer)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});


// change permission for  seeCustomer by master account
router.post('/seeCustomer/:id',auth,async(req,res) =>{
    // res.send("hii ");
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{seeCustomer: Boolean(!account[0].seeCustomer)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});


router.post('/addSupplier/:id',auth,async(req,res) =>{
    // res.send("hii ");
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{addSupplier: Boolean(!account[0].addSupplier)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

// see supplier
router.post('/seeSupplier/:id',auth,async(req,res) =>{
    // res.send("hii ");
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{seeSupplier: Boolean(!account[0].seeSupplier)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

//  allow to add transaction
router.post('/addTransaction/:id',auth,async(req,res) =>{
    // res.send("hii ");
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{addTransaction: Boolean(!account[0].addTransaction)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});

//  allow to see transaction
router.post('/seeTransaction/:id',auth,async(req,res) =>{
    // res.send("hii ");
    try {
    // const account = await User.findById( req.params.id).select('-password');
    // console.log(user.owner);
    var argu ={
        _id:req.params.id,
        owner:req.user.id
    }
     const account = await User.find(argu);
    // if(req.user.id === account.owner){
        // await User.update(argu,{ "$inc": { "addItem": 1 } }); {$set:{isBusy:true}}
        await User.updateOne(argu, {$set:{seeTransaction: Boolean(!account[0].seeTransaction)}});
    // }
    
    res.json(account);
   
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
    }
});



module.exports = router;