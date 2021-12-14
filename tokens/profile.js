const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  created: { type: Date, default: Date.now },
  urlAvatar: String,
  username: String,
  email: String,
  name: String,
  firstname: String,
  lastname: String,
  birthday: Date,
  gender: String,
  level: Number,
  experience: Number,
  boosters: Number,
  coins: Number,
  bytes: Number,
  tokens: {
    cards: [{ type: Schema.Types.ObjectId, ref: "card" }],
    skins: [{ type: Schema.Types.ObjectId, ref: "skin" }],
    skills: [{ type: Schema.Types.ObjectId, ref: "skill" }],
    items: [{ type: Schema.Types.ObjectId, ref: "item" }],
  },
  decks: [
    {
      card: [
        {
          type: Schema.Types.ObjectId,
          ref: "card",
        },
      ],
      active: Boolean,
    },
  ],
  loyalty: Number, // lealtad
  purchased: {
    cards: [{ type: Schema.Types.ObjectId, ref: "card" }],
    skins: [{ type: Schema.Types.ObjectId, ref: "skin" }],
    skills: [{ type: Schema.Types.ObjectId, ref: "skill" }],
    items: [{ type: Schema.Types.ObjectId, ref: "item" }],
  },
  games: {
    win: Number,
    lose: Number,
    draw: Number,
    matches: Number,
  },
  block: String,
  faction: String,
});

const model = mongoose.model("user", mySchema);
module.exports = model;
