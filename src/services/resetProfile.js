
import { users } from "../data/users";
import Cookies from "js-cookie";

export const user = [
    { idUser: users[0]._id },
    { urlAvatar: users[0].avatar || "" },
    { email: users[0].email },
    { name: users[0].name },
    {
      account: {
        id: users[0]._id,
        email: "",
        name: "nologin",
        avatar: users[0].avatar || "nologin",
        notifications: [],
        deck: {},
      },
    },
    { PID: Cookies.get("PID")},
    {theme: "lightmode"} ,
    { level: 1 },
    { booster: 0 },
    { coins: 0 },
    { bytes: 0 },
    { tokens: [] },
    { decks: [] },
    { skill: {} },
    { loyalty: 0 },
    {
      purchased: {
        character: [],
        skin: [],
        skill: [],
        item: [],
      },
    },
    {
      tokens: {
        character: [],
        skin: [],
        skill: [],
        item: [],
      },
    },
    {
      games: {
        win: 0,
        lose: 0,
        draw: 0,
        matches: 0,
      },
    },
    {
      booster: 0,
    },
]