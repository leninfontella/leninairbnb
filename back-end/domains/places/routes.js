import { Router } from "express";
import { Place } from "./models.js";
import { JWTVerify } from "../../utils/jwt.js";
import { connectDB } from "../../config/db.js";
import { downloadImage } from "../../utils/imageDownloader.js";
import { __dirname } from "../../server.js";
import { sendToS3 } from "./controller.js";

const router = Router();

router.post("/", async (req, res) => {
  connectDB();
  const {
    title,
    city,
    photos,
    description,
    extras,
    price,
    perks,
    checkin,
    checkout,
    guests,
  } = req.body;

  try {
    const { _id: owner } = await JWTVerify(req);

    const newPlaceDoc = await Place.create({
      owner,
      title,
      city,
      photos,
      description,
      extras,
      perks,
      price,
      checkin,
      checkout,
      guests,
    });

    res.json(newPlaceDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json("Deu erro ao criar o novo lugar");
  }
});

router.post("/upload/link", async (req, res) => {
  const { link } = req.body;
  const path = `${__dirname}/tmp/`;

  try {
    const { filename, fullPath, mimeType } = await downloadImage(link, path);

    const fileURL = await sendToS3(filename, fullPath, mimeType);

    res.json(fileURL);
  } catch (error) {
    console.error(error);
    res.status(500).json("Deu erro ao baixar a imagem");
  }
});

export default router;
