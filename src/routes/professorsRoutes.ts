import express from "express";
import professorsController from "../controllers/professorsController";
const router = express.Router();

router
  .route("/")
  .get(professorsController.all)
  .post(professorsController.create);

router
  .route("/:id")
  .get(professorsController.get)
  .put(professorsController.update)
  .delete(professorsController.delete);

export default router;
