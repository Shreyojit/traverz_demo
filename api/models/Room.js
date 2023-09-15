const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      
      unique: true,
    },
    desc: {
      type: String,
      
      unique: true,
    },
    price: {
      type: Number,
      
    },
    country: {
     type: String,
     
    },
    photo: {
      type: String,
    },
    type: {
      type: String,
      
    },
    review: {
      type: String,
      
      min: 0,
      max: 5,
    },
    unavailableDates: {
      type: [Number],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);