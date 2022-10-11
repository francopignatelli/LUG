import { Router } from "express";
import {blogController} from "../../../controllers/blog";
// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/blogs/ con un metodo GET.
router.get("/", blogController.get);

router.get("/:id", blogController.get);

router.post("/", blogController.post) //Paso funcion como objeto
// se exporta el router para poder enlazarlo con las rutas que estan dentro de /api.

router.put("/:id", blogController.put);

router.delete("/:id", blogController.delete);

export default router;
