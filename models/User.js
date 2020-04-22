const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  // for subaccount
  owner:{
    type: Schema.Types.ObjectId,
    ref: 'users',
     
  },
  addItem:{
    type:Boolean,
    default:false
  },
  seeItem:{
    type:Boolean,
    default:false
  },
  addCustomer:{
    type:Boolean,
    default:false
   },
  seeCustomer:{
    type:Boolean,
    default:false
  },
  addSupplier:{
    type:Boolean,
    default:false
   },
  seeSupplier:{
    type:Boolean,
    default:false
  },
  addTransaction:{
    type:Boolean,
    default:false
   },
  seeTransaction:{
    type:Boolean,
    default:false
  }
  
});

module.exports = User = mongoose.model('user', UserSchema);
