const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  created: { type: Date, default: Date.now },
  _id: String,
  name: String,
  description: String,
  cooldown: Number,
  count: Number,
  use: Boolean,
  price: Number,
  typeToken: String,
  color: String,
  image: String,
  vocation: String,
  typeCharacter: String,
  card: { type: Schema.Types.ObjectId, ref: "card" },
});

const model = mongoose.model("skin", mySchema);
module.exports = model;
