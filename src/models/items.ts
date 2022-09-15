
import mongoose, { Schema } from "mongoose";

const itemsSchema = new Schema({
    name :{
     type : String,
     required : true , 
     maxlength : 15,
     minlength : 3
    },
  quantity: {
    type: Number,
    required: true,
    max: 100,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    max: 1000,
    min: 0
  },
  avaliabilty : {
    type: Boolean,
    default: true
  }
},{
  timestamps: true
});

const Items = mongoose.model("Items", itemsSchema);

export default Items;