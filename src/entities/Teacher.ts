// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Course from './Course';

@Entity('teachers')
export default class Teacher {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToMany(() => Course, (course) => course.teachers)
    @JoinTable()
        courses: Course[];
}
