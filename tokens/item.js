const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  created: { type: Date, default: Date.now },
  name: String,
  description: String,
  rarity: String,
  set: String,
  use: Boolean,
  count: Number,
  price: Number,
  faction: String,
  image: String,
  location: String,
  requirement: String,
  upgrade: Object,
  typeToken: String,
});

const model = mongoose.model("item", mySchema);
module.exports = model;
