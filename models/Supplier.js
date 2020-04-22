const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  companyName:{
      type:String,
      required:true
  },
  personName:{
      type:String,
      required:true
  },
  email:{
      type:String,
  },
  phoneNum:{
      type:Number,
      required:true
  },
  address:{
      type:String,
      required:true
  },
  pyble:{
      type:Number,
    //   required:true
  },
  recble:{
    type:Number,
    // required:true
},
//   ,
  itemsSupplied:[{
    type: Schema.Types.ObjectId,
    ref: 'items'
  }]
});

module.exports = Supplier = mongoose.model('supplier', SupplierSchema);
