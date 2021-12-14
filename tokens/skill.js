const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  created: { type: Date, default: Date.now },
  _id: String,
  code: String,
  name: String,
  description: String,
  cost: Number,
  turn: Number,
  cooldown: Number,
  level: Number,
  count: Number,
  use: Boolean,
  price: Number,
  rarity: String,
  position: Number,
  faction: String,
  type: String,
  status: Boolean,
  typeToken: String,
  color: String,
  image: String,
  to_affect: [
    {
      player: String,
      to: String,
      method: String,
      state: String,
      action: String,
      value: String,
      typeValue: String,
      effect: String,
      multiplier: Number,
      repeat: Number,
      trigger: String,
      permanent: Boolean,
      field: Array,
    },
  ],
});

const model = mongoose.model("skill", mySchema);
module.exports = model;
