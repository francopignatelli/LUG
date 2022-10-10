import { Schema, model } from "mongoose";

// declaro la estructura que va a tener mi esquema/documento/tabla.
// La forma de un objeto, debido a que en base de datos no relacionales las cosas no tienen formas definidas.
const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: String,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }], //Array de los id de los comments
  date: { type: Date, default: Date.now },
});

// exporto mi modelo, el cual me permite acceder a los metodos de la bd.
export default model("Blog", blogSchema);
