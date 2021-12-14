module.exports = {
  api: {
    port: process.env.API_PORT || 5500,
  },
  jwtsecret: {
    secret: process.env.JWT_SECRET || "notasecret!",
  }
};
