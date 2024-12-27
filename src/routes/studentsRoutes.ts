import express from "express";
import studentsController from "../controllers/studentsController";
const router = express.Router();

router
  .route("/")
  .get(studentsController.all)
  .post(studentsController.create);

router
  .route("/:id")
  .get(studentsController.get)
  .put(studentsController.update)
  .delete(studentsController.delete);

export default router;
