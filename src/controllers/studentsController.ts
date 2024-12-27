import { Request, Response } from "express";
import { Student } from "../models/studentModel";

class StudentsController {
  constructor() {}

  async all(req: Request, res: Response) {
    try {
      const data = await Student.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Student.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("student: not found.");
      } else {
        res.status(200).json(data);
      }
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await Student.save(req.body);
      res.status(201).json(data);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Student.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("student: not found.");
      }
      await Student.update({ id : Number(id) }, req.body);
      const updated = await Student.findOneBy({ id : Number(id) });
      res.status(200).json(updated);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Student.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("student: not found.");
      }
      await Student.delete({ id : Number(id) });
      res.sendStatus(204);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }
}

export default new StudentsController();
