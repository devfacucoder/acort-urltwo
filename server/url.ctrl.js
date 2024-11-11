import { nanoid } from "nanoid";
import urlModel from "./url.model.js";

function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

const sendUrl = async (req, res) => {
  try {
    const { urlss } = req.body;
    if (!isValidURL(urlss)) {
      return res.status(400).json({ message: "URL no válida" });
    }

    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24); // URL expira en 24 horas

    const urlDB = await urlModel.create({
      urlOrignal: urlss,
      ideUrlDb: nanoid(5),
      expirationDate,
    });
    res
      .status(200)
      .json({ mensage: process.env.BASE_URL + "/" + urlDB.ideUrlDb,duration:urlDB.expirationDate });
  } catch (error) {
    res.status(500).json({ mensage: "Error al acortar la URL" });
    console.log(error);
  }
};
const usarUrl = async (req, res) => {
  try {
    const { id } = req.params;
    const urlOri = await urlModel.findOne({ ideUrlDb: id });

    if (!urlOri) {
      return res.status(404).json({ message: "URL no encontrada" });
    }

    const now = new Date();
    if (now > urlOri.expirationDate) {
      return res.status(410).json({ message: "La URL ha expirado" });
    }

    res.redirect(urlOri.urlOrignal);
  } catch (error) {
    res.status(500).json({ message: "Error en la redirección" });
    console.log(error);
  }
};
export default { sendUrl, usarUrl };
