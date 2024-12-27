import { Request, Response } from "express";
import { Professor } from "../models/professorModel";

class ProfessorsController {
  constructor() {}

  async all(req: Request, res: Response) {
    try {
      const data = await Professor.find();
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Professor.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("professor: not found.");
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
      const data = await Professor.save(req.body);
      res.status(201).json(data);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Professor.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("professor: not found.");
      }
      await Professor.update({ id : Number(id) }, req.body);
      const updated = await Professor.findOneBy({ id : Number(id) });
      res.status(200).json(updated);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await Professor.findOneBy({ id : Number(id) });
      if (!data) {
        throw new Error("professor: not found.");
      }
      await Professor.delete({ id : Number(id) });
      res.sendStatus(204);
    } catch (err) {
      if (err instanceof Error)
        res.status(500).send(err.message);
    }
  }
}

export default new ProfessorsController();
