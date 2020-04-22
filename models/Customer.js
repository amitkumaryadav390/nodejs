const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name:{
      type:String,
      required:true
  },
  gender: {type: String},
  age:{
    type:String,
  },
  email:{
      type:String
  },
  phoneNum:{
      type:String,
     // required:true,
     // unique:true
  },
  address:{
      type:String,
      //required:true
  },
  pyble:{
      type:Number,
    //   required:true
  },
  noofbill:{
    type:Number,
    default : 0,

  //   required:true
},
totalPurchase:{
  type:Number,
  default : 0,

//   required:true
},

  recble:{
    type:Number,
    // required:true
},
//   ,
saleValue:{
  type:Number,
  default:0
}
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);
