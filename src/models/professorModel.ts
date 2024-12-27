import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Course } from "./courseModel";

@Entity("professor")
export class Professor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  dni: String;

  @Column()
  name: String;

  @Column()
  lastname: String;

  @Column()
  email: String;

  @Column()
  profession: String;

  @Column()
  phone: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Course, (course) => course.professor)
  courses: Course[];
}
