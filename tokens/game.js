const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  _id: Number,
  startGame: { type: Date, default: Date.now },
  endGame: Date,
    
  players: [
    {
      player: { type: Schema.Types.ObjectId, ref: "User" },
      name: String,
      level: Number,
      points: Number,
      deck: [
        {
          card: Object,
        },
      ],
    },
  ],
});

const model = mongoose.model("game", mySchema);
module.exports = model;
