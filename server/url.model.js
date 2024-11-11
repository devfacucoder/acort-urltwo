// url.model.js
import { model, Schema } from "mongoose";

const urlSchema = new Schema({
  urlOrignal: String,
  ideUrlDb: String,
  expirationDate: { type: Date, required: true }, // Campo de expiración
});

const urlModel = model("urls", urlSchema);
export default urlModel;
