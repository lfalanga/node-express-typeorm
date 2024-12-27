import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import studentsRoutes from "./routes/studentsRoutes";
import professorsRoutes from "./routes/professorsRoutes";
import coursesRoutes from "./routes/coursesRoutes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript!");
});
app.use("/students", studentsRoutes);
app.use("/professors", professorsRoutes);
app.use("/courses", coursesRoutes);

export default app;
