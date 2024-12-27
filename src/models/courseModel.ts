import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Professor } from "./professorModel";
import { Student } from "./studentModel";

@Entity("course")
export class Course extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  name: String;

  @Column("text")
  description: String;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Professor, (professor) => professor.courses)
  @JoinColumn({ name: "id_professor" })
  professor: Professor;

  @ManyToMany(() => Student)
  @JoinTable({
    name: "course_student",
    joinColumn: { name: "id_course" },
    inverseJoinColumn: { name: "id_student" },
  })
  students: Student[];
}
