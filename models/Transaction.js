const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  TransactionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      by:{
        type:String,  //for identify supplier or customer
    },
    items: [
        {
            name:{
                type:String,
                required:true
            },
           
            code:{
                type:String,
                required:true,
                  // doubt unique for similar type of item or item
                 
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
            discount:{
                type:Number
            },
            otherCharges:{
                type:Number
            },
            otherDiscount:{
                type:Number
            },
            MRP:{
                type:Number
            },
            byCash:{
                type:Number,
                default:0
            },
            byUPI:{
                type:Number,
                default:0
            },
            byCard:{
                type:Number,
                default:0
            }
        }
    ],
     Name:{
        type:String,
        // required:true
    },
    PhoneNum:{
        type:Number,
        // required:true
    },
    totalAmount:{
      type:Number
    },
    Date:{
      type:String,
     // default:Date.now
    }
});

module.exports =  Transaction = mongoose.model('transaction',  TransactionSchema);
