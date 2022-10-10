import { Router } from "express";
import {userController} from "../../../controllers/user";
// se instancia un nuevo router el cual se utilizara para nestear rutas.
const router = Router();
// cuando la url coincida con esta ruta, se ejecuta el codigo dentro de la funcion.
// en este caso la url deberia ser --> localhost:PORT/api/users/ con un metodo GET.
router.get("/", userController.get);

router.get("/:username", userController.get);

router.post("/", userController.post) //Paso funcion como objeto
// se exporta el router para poder enlazarlo con las rutas que estan dentro de /api.

router.put("/:username", userController.put);

router.delete("/:username", userController.delete);

export default router;
