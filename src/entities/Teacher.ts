// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany, JoinColumn } from 'typeorm';
import Course from './Course';
import Exam from './Exam';

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToMany(() => Course, (course) => course.teachers)
        courses: Course[];

    @OneToMany(() => Exam, (exam) => exam.id)
    @JoinColumn()
        exams: Exam[];
}
