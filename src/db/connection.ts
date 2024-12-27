import { DataSource } from "typeorm";
import { Student } from "../models/studentModel";
import { Professor } from "../models/professorModel";
import { Course } from "../models/courseModel";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "student",
  database: "courses",
  logging: true,
  synchronize: false,
  entities: [Student, Professor, Course],
  subscribers: [],
  migrations: [],
})