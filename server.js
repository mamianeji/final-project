const express = require("express");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
const fileUpload = require("express-fileupload");
const { cloudinary } = require("./utils/cloudinary");

const app = express();

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());

const dbconnect = require("./DB_connect");
dbconnect();
app.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:dev_setups")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();

  const publicIds = resources.map((file) => file.public_id);
  res.send(publicIds);
});
app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "dev_setups",
    });
    console.log(uploadResponse);
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});
app.use("/product", require("./routes/productRouter"));
app.use("/client", require("./routes/client"));
app.use("/reservation", require("./routes/reservations"));

app.use(passport.initialize());

app.listen(
  process.env.PORT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => (err ? console.log(err) : console.log("server is running"))
);
