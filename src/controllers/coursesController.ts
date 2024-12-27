import { Request, Response } from "express";
import { Course } from "../models/courseModel";
import { Professor } from "../models/professorModel";
import { Student } from "../models/studentModel";

class CoursesController {
  constructor() {}

  async all(req: Request, res: Response) {
    try {
      const data = await Course.find({
        relations: { professor: true, students: true },
      });
      res.status(200).json(data);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const registry = await Course.findOne({
        where: { id: Number(id) },
        relations: { professor: true, students: true },
      });
      if (!registry) {
        throw new Error("course: not found.");
      } else {
        res.status(200).json(registry);
      }
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { professor } = req.body;
      const registry = await Professor.findOneBy({ id: Number(professor) });
      if (!registry) {
        throw new Error("professor: not found.");
      }
      const created = await Course.save(req.body);
      res.status(201).json(created);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { professor } = req.body;
      const search = await Professor.findOneBy({ id: Number(professor) });
      if (!search) {
        throw new Error("professor: not found.");
      }
      const { id } = req.params;
      const registry = await Course.findOneBy({ id: Number(id) });
      if (!registry) {
        throw new Error("course: not found.");
      }
      await Course.update({ id: Number(id) }, req.body);
      const updated = await Course.findOne({
        where: { id: Number(id) },
        relations: { professor: true, students: true },
      });
      res.status(200).json(updated);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const registry = await Course.findOneBy({ id: Number(id) });
      if (!registry) {
        throw new Error("course: not found.");
      }
      await Course.delete({ id: Number(id) });
      res.sendStatus(204);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }

  async join(req: Request, res: Response) {
    try {
      const { id_student, id_course } = req.body;
      const student = await Student.findOneBy({
        id: Number(id_student),
      });
      const course = await Course.findOne({
        where: { id: Number(id_course) },
        relations: { professor: true, students: true },
      });
      if (!student) throw new Error("student: not found.");
      if (!course) throw new Error("course: not found.");
      course.students = course.students || [];
      course.students.push(student);
      const created = await Course.save(course);
      res.status(200).json(created);
    } catch (err) {
      if (err instanceof Error) res.status(500).send(err.message);
    }
  }
}

export default new CoursesController();
