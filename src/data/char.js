module.exports = {
  player: {
    _id: "odhoiajodsodij323ojit",
    name: "jugador",
    experience: 0,
    energy: 0,
    pointExpercience: 1000,
    level: 1,
    // tokens: [],
    tokens: {
      cards: [],
      skins: [],
      skills: [],
      item: [],
    },
    purchased: {
      cards: [],
      skins: [],
      skills: [],
      item: [],
    },
    team: [],
    change: 50,
    block: "",
    faction: "",
    skill: {},
    clan: "cybergs",
    loyalty: 1,
    range: "",
    avatar: "",
    email: "",
    password: "",
    games: {
      win: 0,
      lose: 0,
      draw: 0,
      matches: 0,
    },
  },
  card: {
    _id: "odhoiajodsodij323ojid",
    idToken: "oisud234oiuoi3",
    name: "",
    image: "",
    file: "",
    background: "",
    typeToken: "",
    block: "",
    rarity: "",
    aboutme: "",
    race: "",
    count: 0,
    experience: 0,
    pointExpercience: 1000,
    level: 1,
    effect: "none", // Efecto del ataque del personaje
    power: 0,
    slots: [
      { location: "head", use: false },
      { location: "body", use: false },
      { location: "arms", use: false },
      { location: "legs", use: false },
    ], // Poder Total
    states: {
      energy: 20, // recuperación energia
      energyBase: 20, // energia de inicio
      affinity: 0, // afinidad entre los miembros
      strength: 10, // Fuerza de ataque
      precision: 10, // Precision de ataque
      conscience: 10,
      armor: 10, // armadura
      dodge: 1, // esquivar
      influence: 0, // Poder de influencia
      knowlegde: 0, // Poder de conocimiento
      shield: 0, // Escudo
      maxshield: 0, // Maximo escudo de serie
      life: 100, // Vida del personaje
      maxlife: 100, // Maxima vida del personaje
    },
    recovery: {
      life: 0.1, // Recuperación de vida en el turno rival
      shield: 0.2, // recuperación de escudo en el turno del rival
    },
    resistence: {
      normal: 10,
      fire: 0,
      electric: 0,
      poison: 0,
      blood: 0,
      pure: 0,
    },
    skills_combat: [
      { location: "0", use: false },
      { location: "1", use: false },
      { location: "2", use: false },
      { location: "3", use: false },
    ],
    skills: [
      {
        cost: 10,
        name: "",
        description: "",
        shortkey: 1,
        cooldown: 0,
        turn: 0,
        code: "",
        state: true,
      },
      {
        cost: 20,
        name: "",
        description: "",
        shortkey: 2,
        cooldown: 0,
        turn: 0,
        code: "",
        state: true,
      },
      {
        cost: 50,
        name: "",
        description: "",
        shortkey: 3,
        cooldown: 0,
        turn: 0,
        code: "",
        state: true,
      },
      {
        cost: 150,
        name: "",
        description: "",
        shortkey: 4,
        cooldown: 0,
        turn: 0,
        code: "",
        state: true,
      },
    ],
    defense: {
      block: {
        strength: 10,
        cost: 30,
        name: "block",
        description: "Bloquea mucho daño del rival",
      },
      shield: {
        strength: 10,
        cost: 40,
        shortkey: 5,
        description: "Añade escudo a un personaje",
        name: "shield",
      },
    },
    change: {
      name: "change",
      description: "Intercambia tu carta del tablero por otra del banquillo",
      cost: 50,
    },
  },

  effects: {
    normal: "Applies normal atack",
    fire: "Applies fire to the atack",
    electric: "Applies electric to the atack",
    water: "Applies water to the atack",
    blood: "Applies life stealing to the atack",
  },

  skills: [
    {
      code: "a000",
      name: "super",
      status: true,
      type: "active",
      description: "Te hace 100 de daño verdadero",
      cost: 100,
      cooldown: 0,
    },
    {
      code: "c001",
      name: "super",
      status: true,
      type: "active",
      description: "Durante 4 turnos te hace daño a fuego",
      cost: 50,
      cooldown: 4,
    },
    {
      code: "d002",
      name: "super",
      status: true,
      type: "active",
      description: "Durante 2 turnos no puedes cambiar de carta",
      cost: 20,
      cooldown: 4,
    },
    {
      code: "c002",
      name: "super",
      status: true,
      type: "active",
      description: "Durante 4 turnos aumenta un poco más la energia",
      cost: 30,
      cooldown: 4,
    },
    {
      code: "c003",
      name: "super",
      status: true,
      type: "active",
      description: "Durante 2 turnos quitas un poco de energia al rival",
      cost: 20,
      cooldown: 2,
    },
    {
      code: "d003",
      name: "super",
      status: true,
      type: "active",
      description: "Inmunidad durante 1 turno",
      cost: 200,
      cooldown: 2,
    },
    {
      code: "d001",
      name: "super",
      status: true,
      type: "active",
      description: "Durante 1 turno el enemigo no puede hacer ninguna acción",
      cost: 50,
      cooldown: 3,
    },
    {
      code: "c004",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 2 turnos cuando un oponente te golpea se hace un 20% del daño inflingido",
      cost: 30,
      cooldown: 2,
    },
    {
      code: "d004",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 4 turnos, si una carta oponente recibe escudo, en vez de eso, recidbe daño",
      cost: 20,
      cooldown: 4,
    },
    {
      code: "d005",
      name: "super",
      status: true,
      type: "active",
      description:
        "Cuando vaya a morir la proxima vez una de tus cartas, resucita",
      cost: 250,
      cooldown: 5,
    },
    {
      code: "d006",
      name: "super",
      status: true,
      type: "active",
      description:
        "Todo el daño recibido en el proximo turno del oponente, lo recibira un compañero al azar",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "n001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Todo el daño recibido el proximo turno del oponente, lo recibira un compañero a elegir",
      cost: 50,
      cooldown: 2,
    },
    {
      code: "d007",
      name: "super",
      status: true,
      type: "active",
      description:
        "Todo el daño recibido el proximo turno, se transformara en vida",
      cost: 100,
      cooldown: 4,
    },
    {
      code: "d008",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 3 turnos el oponente esta obligado a atacar con el ataque basico",
      cost: 40,
      cooldown: 3,
    },
    {
      code: "m001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Copia la ultima habilidad que haya utilizado el rival y la aumenta en un 20%",
      cost: 30,
      cooldown: 0,
    },
    {
      code: "d009",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 3 turnos el rival no puede hacer ninguna acción a no ser que reciba daño",
      cost: 30,
      cooldown: 4,
    },
    {
      code: "d010",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 2 turnos tienes un escudo protector que mitiga un 40% del daño recibido ",
      cost: 30,
      cooldown: 2,
    },
    {
      code: "k001",
      name: "super",
      status: true,
      type: "active",
      description: "Todo el daño que recibdas se transformara en energia",
      cost: 20,
      cooldown: 2,
    },
    {
      code: "d011",
      name: "super",
      status: true,
      type: "active",
      description:
        "Si mi carta muere, la del rival tambien, da igual su vida o escudo",
      cost: 200,
      cooldown: 6,
    },
    {
      code: "d012",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 4 turnos causa confusion al rival (50% de probabilidad de atacar cualquier carta del oponente)",
      cost: 100,
      cooldown: 4,
    },
    {
      code: "d013",
      name: "super",
      status: true,
      type: "active",
      description:
        "Te pones un escudo del 20% de tu vida e inflinges daño al rival equivalente a un 30% de l escudo",
      cost: 30,
      cooldown: 2,
    },
    {
      code: "d014",
      name: "super",
      status: true,
      type: "active",
      description:
        "No puede atacar hasta que cambie de carta, si solo tiene 1 carta, solo dura un turno",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "d015",
      name: "super",
      status: true,
      type: "active",
      description:
        "Duerme al enemigo, no puede hacer ninguna accion hasta que despierte, tiene un 55% probabilidad de que despierte al inició de cada turno",
      cost: 50,
      cooldown: 3,
    },
    {
      code: "d016",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 2 turnos el rival tiene un 50% de probabilidad de que falle sus habilidades",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "d017",
      name: "super",
      status: true,
      type: "active",
      description:
        "Durante 2 turnos tienes un 50% más de probabilidad de esquivar los ataques",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "a007",
      name: "super",
      status: true,
      type: "active",
      description: "Se pone escudo a si mismo.",
      cost: 50,
      cooldown: 0,
    },
    {
      code: "j002",
      name: "super",
      status: true,
      type: "active",
      description: "Inrercambia el escudo con el rival.",
      cost: 50,
      cooldown: 2,
    },
    {
      code: "b004",
      name: "super",
      status: true,
      type: "active",
      description: "Le pone escudo a una carta a elegir.",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "f001",
      name: "super",
      status: true,
      type: "passive",
      description:
        "Cuando realizas un ataque se añade uma marca, cada marca hace aumentar un 20% la probabilidad de critico, si utilizas otra habilidad se pierden las marcas",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "d018",
      name: "super",
      status: true,
      type: "passive",
      description:
        "Cada turno recuperas un 5% de la vida hasta llegar al 100% ",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "a008",
      name: "super",
      status: true,
      type: "active",
      description: "Recuperas el 100% de la vida",
      cost: 30,
      cooldown: 0,
    },
    {
      code: "a009",
      name: "super",
      status: true,
      type: "passive",
      description:
        "Infunde miedo, si el rival es de otra facción, reduce el daño y la armadura a la mitad, sino un 25%",
      cost: 20,
      cooldown: 2,
    },
    {
      code: "d019",
      name: "super",
      status: true,
      type: "passive",
      description:
        "Probabilidad de un 20% de que tu oponente falle sus ataques ",
      cost: 20,
      cooldown: 0,
    },
    {
      code: "f002",
      name: "super",
      status: true,
      type: "passive",
      description:
        "Cuando realizas un bloqueo, añades una marca, si tienes 10 cargas, haces una explosion letal al oponente, las marcas se vacian",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "g001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Escoge una carta para luchar y hace daño por 20% de la vida del rival",
      cost: 50,
      cooldown: 2,
    },
    {
      code: "g002",
      name: "super",
      status: true,
      type: "active",
      description: "Escoge una carta para luchar y le añade 100 de escudo",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "g003",
      name: "super",
      status: true,
      type: "active",
      description: "Golpea 2 veces e intercambia por otra carta",
      cost: 50,
      cooldown: 2,
    },
    {
      code: "g004",
      name: "super",
      status: true,
      type: "active",
      description: "Intercambia por otra carta y recupera energia",
      cost: 60,
      cooldown: 3,
    },
    {
      code: "g005",
      name: "super",
      status: true,
      type: "active",
      description: "Intercambia por otra carta y le aumenta los states",
      cost: 70,
      cooldown: 2,
    },
    {
      code: "h001",
      name: "super",
      status: true,
      type: "active",
      description: "Obliga al oponente a cambiar su carta por otra a elegir",
      cost: 80,
      cooldown: 4,
    },
    {
      code: "i001",
      name: "super",
      status: true,
      type: "active",
      description: "intercambia tu carta por la de tu rival durante 2 turnos",
      cost: 80,
      cooldown: 2,
    },
    {
      code: "i002",
      name: "super",
      status: true,
      type: "active",
      description:
        "Intercambia por otra carta y durante el proximo turno del rival es inmmune",
      cost: 100,
      cooldown: 4,
    },
    {
      code: "a010",
      name: "super",
      status: true,
      type: "active",
      description: "Golpea 4 veces al enemigo con ataque basic0",
      cost: 60,
      cooldown: 2,
    },
    {
      code: "a011",
      name: "super",
      status: true,
      type: "active",
      description: "Realiza un combo de 5 ataques de cada tipo al enemigo",
      cost: 50,
      cooldown: 4,
    },
    {
      code: "a012",
      name: "super",
      status: true,
      type: "active",
      description: "Realiza un ataque super potente",
      cost: 100,
      cooldown: 4,
    },
    {
      code: "a013",
      name: "super",
      status: true,
      type: "active",
      description: "Realiza un ataque a todos los enemigos de 100 de daño",
      cost: 80,
      cooldown: 4,
    },
    {
      code: "a014",
      name: "super",
      status: true,
      type: "active",
      description:
        "Realiza un ataque de electrico a todos los personajes, daño de 100 puntos",
      cost: 80,
      cooldown: 4,
    },
    {
      code: "c004",
      name: "super",
      status: true,
      type: "active",
      description:
        "Realiza un ataque de fuego a todos los personajes de 50, durante 4 turnos hace 20 de año por quemaduras",
      cost: 80,
      cooldown: 4,
    },
    {
      code: "a015",
      name: "super",
      status: true,
      type: "active",
      description:
        "Realiza de 2 a 5 ataques basicos, con una probabilidad de 50% de hacer daño critico",
      cost: 60,
      cooldown: 4,
    },
    {
      code: "a016",
      name: "super",
      status: true,
      type: "active",
      description: "Realiza un ataque basico con un 30% de daño extra",
      cost: 30,
      cooldown: 0,
    },
    {
      code: "c005",
      name: "super",
      status: true,
      type: "active",
      description: "Incrementa los valores del jugador durante 3 turnos.",
      cost: 20,
      cooldown: 0,
    },
    {
      code: "c006",
      name: "super",
      status: true,
      type: "active",
      description:
        "Incrementa los valores del jugador de la carta permanentemente.",
      cost: 120,
      cooldown: 6,
    },
    {
      code: "c007",
      name: "super",
      status: true,
      type: "active",
      description: "Decrementa los valores del enemigo durante 3 turnos",
      cost: 50,
      cooldown: 3,
    },
    {
      code: "c008",
      name: "super",
      status: true,
      type: "active",
      description: "Decrementa los valores del enemigo permanente.",
      cost: 120,
      cooldown: 6,
    },
    {
      code: "d020",
      name: "super",
      status: true,
      type: "passive",
      description: "Si un aliado es de otro bloque, hace el doble de daño.",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "5005",
      name: "super",
      status: true,
      type: "passive",
      description: "Si tus aliados estan muertos hace el doble de daño.",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "b005",
      name: "super",
      status: true,
      type: "active",
      description:
        "Quitas el 20% de los estados de tu rival y se lo añades a tu carta",
      cost: 100,
      cooldown: 6,
    },
    {
      code: "a015",
      name: "super",
      status: true,
      type: "active",
      description: "Eliminas cualquier estado que tenga tu personaje",
      cost: 30,
      cooldown: 2,
    },
    {
      code: "a016",
      name: "super",
      status: true,
      type: "active",
      description: "Aumenta el daño y la regeneración de energia",
      cost: 60,
      cooldown: 4,
    },
    {
      code: "a017",
      name: "super",
      status: true,
      type: "active",
      description: "Destruyes tu carta y su vida le hace daño al rival",
      cost: 120,
      cooldown: 0,
    },
    {
      code: "a018",
      name: "super",
      status: true,
      type: "active",
      description:
        "Destruyes tu carta y su vida se reparte en daño a todos los enemigos.",
      cost: 120,
      cooldown: 0,
    },
    {
      code: "a019",
      name: "super",
      status: true,
      type: "active",
      description: "Te quitas tu escudo y le aplicas ese daño el oponente",
      cost: 60,
      cooldown: 2,
    },
    {
      code: "k001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Gastas toda tu energia y se transforma en daño puro para el oponente",
      cost: 0,
      cooldown: 0,
    },
    {
      code: "k002",
      name: "super",
      status: true,
      type: "active",
      description: "Gastas toda tu escudo y lo transformas en energia",
      cost: 60,
      cooldown: 4,
    },
    {
      code: "g006",
      name: "super",
      status: true,
      type: "active",
      description: "Destruyes tu carta y le das tu vida a una carta a elegir",
      cost: 120,
      cooldown: 0,
    },
    {
      code: "l001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Invoca un totem que estara en el tablero hasta que se pierda su vida o durante 4 turnos ",
      cost: 120,
      cooldown: 4,
    },
    {
      code: "l002",
      name: "super",
      status: true,
      type: "active",
      description:
        "Invoca un totem tipo bomba, pasados 3 turnos, se autodestruira y causara daño letal a la carta oponente",
      cost: 120,
      cooldown: 3,
    },
    {
      code: "l003",
      name: "super",
      status: true,
      type: "active",
      description:
        "Cambia una de tus cartas muertas por otra al azar del juego",
      cost: 200,
      cooldown: 6,
    },
    {
      code: "l004",
      name: "super",
      status: true,
      type: "active",
      description:
        "Cambia una de tus cartas muertas por otra al azar del tablero de juego",
      cost: 160,
      cooldown: 6,
    },
    {
      code: "m001",
      name: "super",
      status: true,
      type: "active",
      description:
        "Retrocede en el tiempo a tu personaje 2 turnos, con los estados tal y como estaban",
      cost: 200,
      cooldown: 4,
    },
    {
      code: "m002",
      name: "super",
      status: true,
      type: "active",
      description: "Retrocede en el tiempo todo el juego 2 turnos",
      cost: 200,
      cooldown: 4,
    },
    {
      code: "d021",
      name: "super",
      status: true,
      type: "active",
      description: "Anula las pasivas de la carta oponente",
      cost: 40,
      cooldown: 2,
    },
    {
      code: "a000",
      name: "super",
      status: true,
      type: "active",
      description: "Recuperar vida 30%",
      cost: 30,
      cooldown: 2,
    },
    {
      code: "a001",
      name: "super",
      status: true,
      type: "active",
      description: "Dar vida a todos los compañeros pero poca cantidad",
      cost: 60,
      cooldown: 2,
    },
    {
      code: "b001",
      name: "super",
      status: true,
      type: "active",
      description: "Dar vida a un compañero",
      cost: 60,
      cooldown: 2,
    },
    {
      code: "a002",
      name: "super",
      status: true,
      type: "active",
      description: "Roba vida al rival",
      cost: 60,
      cooldown: 1,
    },
    {
      code: "j001",
      name: "super",
      status: true,
      type: "active",
      description: "Intercambiar la vida con la de la carta de tu rival",
      cost: 120,
      cooldown: 4,
    },
    {
      code: "b002",
      name: "super",
      status: true,
      type: "active",
      description: "Resucitar una carta con poca vida",
      cost: 120,
      cooldown: 2,
    },
    {
      code: "a003",
      name: "super",
      status: true,
      type: "active",
      description: "Reduce a la mitad la vida de ambas cartas",
      cost: 100,
      cooldown: 0,
    },
    {
      code: "a004",
      name: "super",
      status: true,
      type: "active",
      description: "Golpea y roba vida al rival un 20%",
      cost: 30,
      cooldown: 0,
    },
    {
      code: "a005",
      name: "super",
      status: true,
      type: "active",
      description: "Golpea y roba vida al rival un 50%",
      cost: 40,
      cooldown: 0,
    },
    {
      code: "a006",
      name: "super",
      status: true,
      type: "active",
      description: "Golpea y roba vida al rival un 100%",
      cost: 50,
      cooldown: 0,
    },
    {
      code: "b003",
      name: "super",
      status: true,
      type: "active",
      description:
        "Intercambiar la vida con la de la carta a elegir de tus aliados",
      cost: 120,
      cooldown: 2,
    },
  ],
  skills_es: {
    // VIDA
    "0000": "Recuperar vida 30%",
    "0001": "Da vida a un compañeros o a uno mismo",
    "0002": "Dar vida a todos los compañeros pero poca cantidad",
    "0003": "Roba vida al rival",
    "0004": "Intercambiar la vida con la de la carta de tu rival",
    "0005": "Resucitar una carta con poca vida",
    "0006": "Reduce a la mitad la vida de ambas cartas",
    // Pendientes de aplicar
    "0007": "Golpea y roba vida al rival un 20%",
    "0008": "Golpea y roba vida al rival un 50%",
    "0009": "Golpea y roba vida al rival un 100%",
    "0010": "Intercambiar la vida con la de la carta a elegir de tus aliados",

    // TURNOS
    1000: "Durante 2 turnos te quita daño verdadero",
    1001: "Durante 4 turnos te hace daño a fuego",
    // '1002': "Durante 4 turnos te deniega la pasiva",
    // '1003': "During X turns it denies you the passive",
    1004: "Durante 2 turnos no puedes cambiar de carta",
    1005: "Durante 4 turnos aumenta un poco más la energia",
    1006: "Durante 2 turnos quitas energia un poco de energia al rival",
    1007: "Inmunidad durante 1 turno",
    // Pendientes de aplicar

    1008: "Durante 1 turno el enemigo no puede hacer ninguna acción",
    1009: "Durante 2 turnos cuando un oponente te golpea se hace un 20% del daño inflingido",
    1010: "Durante 4 turnos, si una carta oponente recibe escudo, en vez de eso, recidbe daño",
    1011: "Cuando vaya a morir la proxima vez una de tus cartas, resucita",
    1012: "Todo el daño recibido en el proximo turno del oponente, lo recibira un compañero al azar",
    1013: "Todo el daño recibido el proximo turno del oponente, lo recibira un compañero a elegir",
    1014: "Todo el daño recibido el proximo turno, se transformara en vida",
    1015: "Durante 3 turnos el oponente esta obligado a atacar con el ataque basico",
    1016: "Copia la ultima habilidad que haya utilizado el rival y la aumenta en un 20%",
    1017: "Durante 3 turnos el rival no puede hacer ninguna acción a no ser que reciba daño",
    1018: "Durante 2 turnos tienes un escudo protector que mitiga un 40% del daño recibido ",
    1019: "Todo el daño que recibdas se transformara en energia",
    1020: "Si mi carta muere, la del rival tambien, da igual su vida o escudo",
    1021: "Durante 4 turnos causa confusion al rival (50% de probabilidad de atacar cualquier carta del oponente)",
    1022: "Te pones un escudo de 20% de tu vida, una vez destruido, hace un daño equivalente al 30% del escudo obtenido",
    1023: "No puede atacar hasta que cambie de carta, si solo tiene 1 carta, solo dura un turno",
    1024: "Duerme al enemigo, no puede hacer ninguna accion hasta que despierte, tiene un 55% probabilidad de que despierte al inició de cada turno",
    1025: "Durante 2 turnos el rival tiene un 50% de probabilidad de que falle sus habilidades",

    // PASSIVAS
    2003: "Cuando realizas un ataque se añade uma marca, cada marca hace aumentar un 20% la probabilidad de critico, si haces utilizas otra habilidad se pierden las marcas",
    2004: "Cada turno recuperas un 5% de la vida hasta llegar al 100% ",
    2005: "Recuperas un 5% del daño recibido hasta llegar al 100%",
    2006: "Infunde miedo, si el rival de otra facción reduce el daño y la resistencia a la mitad",
    2007: "Probabilidad de un 20% de que tu oponente falle sus ataques ",
    2008: "Cuando realizas un bloqueo, añades una marca, si tienes 10 cargas, haces una explosion letal al oponente, las marcas se vacian",

    // INTERCAMBIO
    3002: "Escoge una carta para luchar y le añade 100 de escudo",
    3003: "Golpea con especial e intercambia por otra carta",
    3004: "Intercambia por otra carta y recupera energia",
    3006: "Intercambia por otra carta y le aumenta los states",
    3007: "Obliga al oponente a cambiar su carta por otra a elegir",
    // '3005': "Switch card and next ability costs less X% energy",
    // Pendientes de aplicar
    3001: "Escoge una carta para luchar y hace daño por 20% de la vida del rival",
    3008: "intercambia tu carta por la de tu rival durante 2 turnos",
    3009: "Intercambia por otra carta y durante el proximo turno del rival es inmmune",

    // GOLPE
    4000: "Golpea 4 veces al enemigo con ataque especial",
    4001: "Realiza un ataque de cada tipo al enemigo",
    4002: "Realiza un ataque super potente",

    // Pendientes de aplicar
    4003: "Realiza un especial a todos los enemigos de 100 de daño",
    4004: "Realiza un ataque de electrico a todos los personajes, daño de 100",
    4005: "Realiza un ataque de fuego a todos los personajes de 50, durante 4 turnos hace 20 de año por quemaduras",
    4006: "Realiza de 2 a 5 ataques basicos, con una probabilidad de 50% de hacer daño critico",
    4007: "Realiza un ataque basico con un 15% de daño extra",

    // ESTADOS
    2001: "Inrercambia el escudo con el rival.",
    2000: "Se pone escudo a si mismo.",
    5000: "Incrementa los valores del jugador durante 3 turnos.",
    5001: "Incrementa los valores del jugador de la carta permanentemente.",
    5002: "Decrementa los valores del enemigo durante 3 turnos",
    5003: "Decrementa los valores del enemigo permanente.",
    // Pendientes de aplicar
    2002: "Se pone escudo  a una carta a elegir.",
    5004: "Si un aliado es de otro bloque, hace el doble de daño.",
    5005: "Si tus aliados estan muertos hace el doble de daño.",
    5006: "Quitas el 20% de los estados de tu rival y se lo añades a tu carta",
    5007: "Eliminas cualquier estado que tenga tu personaje",
    5008: "Aumenta el daño y la regeneración de energia",

    // '6000': "If the opponent changes card, life will be taken away from him.",

    // MIX
    7001: "Destruyes tu carta y su vida le hace daño al rival",
    7002: "Destruyes tu carta y su vida se reparte en daño a todos los enemigos.",

    // Pendientes de aplicar
    7003: "Te quitas tu escudo y le aplicas ese daño el oponente",
    7004: "Gastas toda tu energia y se transforma en daño puro para el oponente",
    7005: "Gastas toda tu escudo y lo transformas en energia",

    // '7003': "During x turns, if you die, your opponent dies as well.",
    // '7004': "During x turns, no puede utilizar su skill",

    // INVOCACIÓN
    8000: "Invoca un totem que estara en el tablero hasta que se pierda su vida o durante 4 turnos ",
    8001: "Invoca un totem tipo bomba, pasados 3 turnos, se autodestruira y causara daño letal a la carta oponente",
    8002: "Cambia una de tus cartas muertas por otra al azar del juego",
    8003: "Cambia una de tus cartas muertas por otra al azar del tablero de juego",

    // ESPECIALES
    9000: "Retrocede en el tiempo a tu personaje 2 turnos, con los estados tal y como estaban",
    9001: "Retrocede en el tiempo todo el juego 2 turnos",
    9002: "Anula las pasivas de la carta oponente",

    9003: "Crea confusion al utilizar las habilidades, utlizas una habilidad y no sabes cual lanzara",
  },
  skills_eng: {
    "0000": "Recovery life",
    "0001": "Gives life to a partner or to oneself",
    "0002": "Gives life to all but a small amount",
    "0003": "Steal life",
    "0004": "Exchange life with the life of your opponent's card",
    "0005": "Resurrect a card with X life",
    "0006": "Halve the life of both cards",
    1000: "During X turns it takes away true damage",
    1001: "During X turns you take fire damage (watch)",
    1002: "During X turns it gives you poison damage (watch)",
    // '1003': "During X turns it denies you the passive",
    1004: "For X turns you can't change partners",
    1005: "During X turns increases your energy by X%.",
    1006: "During X turns denies your energy in X%",
    1007: "Immunity during 1 turn",
    2000: "Shield to self.",
    2001: "Exchanges the shield with the opponent.",
    3001: "Swap card and hit with special/strong",
    3002: "Put shield to partner and switch shield to play",
    3003: "Hit with special/strong and switch card",
    3004: "Switch card and recover energy",
    3005: "Switch card and next ability costs less X% energy",
    3006: "Increase stat of partner and switch",
    4000: "Make X strong attacks to the opponent",
    4001: "Makes one attack of each type",
    4002: "Makes an explosive attack (High damage)",
    4003: "Makes an attack that does a little damage to all cards",
    5000: "Increase (stat) of self x turns.",
    5001: "Increase (stat) of oneself continuously (until a card is changed).",
    5002: "Decrease (stat) of the opponent x turns.",
    5003: "Decrease (stat) of the opponent continuously (until the card is changed).",
    // '6000': "If the opponent changes card, life will be taken away from him.",
    7001: "Destroy your card, you do a lot of damage to the other card in % to your life.",
    7002: "Destroy your card, you do a lot of damage to all cards in % to your life.",
    // '7003': "During x turns, if you die, your opponent dies as well.",
    // '7004': "During x turns, no puede utilizar su skill",
  },
};
