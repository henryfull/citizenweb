module.exports = {
  "blocks": [
    {
        "id": 1,
        "name": "Establishment",
        "url": "files/icons/emblems/icon-block-establishment.svg",
        "description": "Technocrats and followers of the virtual world of Ether, yearning their independence.",
        "color": "#FA0A04"
    },
    {
        "id": 2,
        "name": "Cybers",
        "url": "files/icons/emblems/icon-block-cybers.svg",
        "description": "They wish to subdue the rest of Citizens through a virtual paradise called Ether.",
        "color": "#16FA04"
    },
    {
        "id": 3,
        "name": "Rebels",
        "url": "files/icons/emblems/icon-block-rebels.svg",
        "description": "The masses want to keep their life of yesteryear: a real life lived with dignity and freedom.",
        "color": "#0465FA"
    }
],
"factions": [
    {
        "block": "Establishment",
        "name": "Statesmen",
        "url": "files/icons/emblems/icon-faction-statesmen.svg",
        "description": "Rulers and businessmen. The government pleases and contains the masses by sponsoring a virtual paradise called 'Ether'",
        "color": "#FA6404"
    },
    {
        "block": "Establishment",
        "name": "Cops",
        "url": "files/icons/emblems/icon-faction-cops.svg",
        "description": "It is the strongest faction of the Establishment. These officers watch over order and control in the real world, but also in Ether's virtual world.",
        "color": "#FA0492"
    },
    {
        "block": "Establishment",
        "name": "Influencers",
        "url": "files/icons/emblems/icon-faction-influencers.svg",
        "description": "Journalists and Influencers are meant to handle the opinion of the masses in favour of the government through Ether.",
        "color": "#FAAF04"
    },
    {
        "block": "Cybers",
        "name": "Masters",
        "url": "files/icons/emblems/icon-faction-masters.svg",
        "description": "Tech-savvy technocrats who agreed to create Ether. They hold relevant and powerful positions as scientists, surgeons and theologians.",
        "color": "#BDFA04"
    },
    {
        "block": "Cybers",
        "name": "Cyborgs",
        "url": "files/icons/emblems/icon-faction-cyborgs.svg",
        "description": "Foreigners that got robotic implants and acquired great qualities that allowed them to develop and design Ether's complex world.",
        "color": "#00D36D"
    },
    {
        "block": "Cybers",
        "name": "Virtuals",
        "url": "files/icons/emblems/icon-faction-virtuals.svg",
        "description": "Citizens that live in a humble way and spend their time in Ether's paradise, where they can hold their “second” lives as they dream",
        "color": "#04FA3F"
    },
    {
        "block": "Rebels",
        "name": "Hackers",
        "url": "files/icons/emblems/icon-faction-hackers.svg",
        "description": "Few Cyborgs hack Ether and report corrupts, trying to rescue the Citizens from the demanding virtual world.",
        "color": "#5804FA"
    },
    {
        "block": "Rebels",
        "name": "Singulars",
        "url": "files/icons/emblems/icon-faction-singulars.svg",
        "description": "Revolutionary in nature, they are thinkers, writers, artists and activists. They fight for the equality and dignity of all animals.",
        "color": "#04D8FA"
    },
    {
        "block": "Rebels",
        "name": "Artisans",
        "url": "files/icons/emblems/icon-faction-artisans.svg",
        "description": "Citizens that struggle to progress, life a real life and maintain real jobs already almost extinct, such as nurses, chefs or prostitutes",
        "color": "#7C00B3"
    }
],

  owners: [1, 2, 3, 4],
  months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  months2: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  getCurrentYear: () => {
    let today = new Date();
    return today.getFullYear();
  },
  getCurrentMonth: () => {
    let today = new Date();
    return today.getMonth();
  },
  Years: () => {
    let today = new Date();
    let yearNow = today.getFullYear() + 1;
    let year = [];
    for (let i = yearNow; i > 1971; i--) {
      year.push(i);
    }
    return year;
  },
};
