const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const Schema = mongoose.Schema;

const mySchema = new Schema({
  _id: Number,
  name: String,
  nameCard: String,
  aboutme: String,
  file: [
    {
      name: String,
      path: String,
      size: Number,
      extension: String,
      mimetype: String,
      filename: String,
      url: String,
      feature: Boolean,
    },
  ],
  image: String,
  background: String,
  count: Number, // contador de cartas iguales,
  slots: [
    {
      item: { type: Schema.Types.ObjectId, ref: "item" },
    },
  ],
  skin: { type: Schema.Types.ObjectId, ref: "skin" },
  typeToken: String,
  race: String,
  block: String,
  rarity: String,
  level: Number,
  effect: String,
  states: {
    energyBase: Number,
    energy: Number,
    affinity: Number,
    strength: Number,
    precision: Number,
    armor: Number,
    dodge: Number,
    influence: Number,
    knowlegde: Number,
    shield: Number,
    maxshield: Number,
    life: Number,
    maxlife: Number,
  },
  resistence: {
    normal: Number,
    fire: Number,
    electric: Number,
    poison: Number,
    blood: Number,
    total: Number,
  },
  recovery: {
    life: Number,
    shield: Number,
  },
  skills: [
    {
      skill: { type: Schema.Types.ObjectId, ref: "skill" },
    },
  ],
  skills_combat: [
    {
      skill: { type: Schema.Types.ObjectId, ref: "skill" },
    },
  ],
  power: Number,
  defense: {
    block: {
      strength: Number,
      cost: Number,
      name: String,
    },
    shield: {
      strength: Number,
      cost: Number,
      description: String,
      name: String,
      color: String,
      code: String,
    },
  },
  change: {
    name: String,
    cost: Number,
    description: String,
    color: String,
    code: String,
  },
});

const model = mongoose.model("card", mySchema);
module.exports = model;
