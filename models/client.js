const mongoose = require("mongoose");
const schema = mongoose.Schema;

const clientSchema = new schema({
  image: { type: String },

  name: {
    type: String,
    required: true,
  },

  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Client = mongoose.model("client", clientSchema);

module.exports = Client;
