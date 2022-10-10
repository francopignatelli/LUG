import { Router } from "express";
import {commentController} from "../../../controllers/comment";
// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/blogs/ con un metodo GET.

router.get("/:id", commentController.get);

router.post("/:id", commentController.post) //Paso funcion como objeto
// se exporta el router para poder enlazarlo con las rutas que estan dentro de /api.

router.delete("/:id", commentController.delete);

export default router;
