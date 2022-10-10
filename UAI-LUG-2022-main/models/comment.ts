import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
   },
  body: String,
  date: { type: Date, default: Date.now },
});

// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Comment", commentSchema);