const express = require("express");
const clientRouter = express.Router();
const bcrypt = require("bcrypt");
const Client = require("../models/client");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const {
  registerRules,
  loginRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

//clientRouter.get("/",(req,res)=> {

//res.send("hello world");
//});

//register

clientRouter.post(
  "/register",
  registerRules(),
  validation,
  async (req, res) => {
    const { image, name, lastname, email, password } = req.body;
    try {
      const newclient = new Client({ image, name, lastname, email, password });

      // check if the email exist
      const searchedClient = await Client.findOne({ email });

      if (searchedClient) {
        return res.status(400).send({ msg: "email already exist" });
      }

      // hash password
      const salt = 10;
      const genSalt = await bcrypt.genSalt(salt);
      const hashedPassword = await bcrypt.hash(password, genSalt);
      console.log(hashedPassword);
      newclient.password = hashedPassword;
      //save the client
      const newClientToken = await newclient.save();
      const payload = {
        _id: newClientToken._id,
        name: newClientToken.name,
      };

      // generate a token

      const token = await jwt.sign(payload, process.env.SecretOrKey, {
        expiresIn: 3600,
      });
      res.status(200).send({
        newClientToken,
        msg: "client is saved",
        token: `Bearer ${token}`,
      });
    } catch (error) {
      res.status(500).send("can not save the client");
    }
  }
);

//login
clientRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the client exist
    const searchedClient = await Client.findOne({ email });
    //if the email not exist
    if (!searchedClient) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //password are equals
    const match = await bcrypt.compare(password, searchedClient.password);

    if (!match) {
      return res.status(400).send({ msg: "can not get the client" });
    }

    //cree un token
    const payload = {
      _id: searchedClient._id,
      name: searchedClient.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    // send the client
    res.status(200).send({
      client: searchedClient,
      msg: "success",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ msg: "can not get the client" });
  }
});

// get methode

clientRouter.get("/current", isAuth(), (req, res) => {
  // console.log(req)
  res.status(200).send({ req: req.user });
});

clientRouter.put("/:id", async (req, res) => {
  try {
    const result = await Client.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "client updated " });
  } catch (error) {
    console.log(error);
  }
});

module.exports = clientRouter;
