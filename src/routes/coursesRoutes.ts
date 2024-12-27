import express from "express";
import coursesController from "../controllers/coursesController";
const router = express.Router();

router
  .route("/")
  .get(coursesController.all)
  .post(coursesController.create);

router
  .route("/join")
  .post(coursesController.join);

router
  .route("/:id")
  .get(coursesController.get)
  .put(coursesController.update)
  .delete(coursesController.delete);

export default router;
