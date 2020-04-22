const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  suppliers: {
    type: Schema.Types.ObjectId,
    ref: 'suppliers'
  },
  name:{
    type:String,
    required:true
},
code:{
    type:String,
    unique:true // doubt unique for similar type of item or item
},
quantity:{
    type:Number,
    default:0
},
baseSellPrice:{
    type:Number,
    // required:true
},
taxRecv:{
    type:Number
},
finalSellPrice:{
    type:Number
},
baseBuyPrice:{
    type:Number
},
taxPaybl:{
    type:Number
},
finalBuyPrice:{
    type:Number
},
MRP:{
    type:Number
},
HSN:{
    type:Number
},
category:{
    type:String
},
date: {
    type: Date,
    default: Date.now
  },
  discount: {
    type: Number,
    default: 0
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
