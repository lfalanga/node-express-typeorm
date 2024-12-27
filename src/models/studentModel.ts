import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("student")
export class Student extends BaseEntity {
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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
