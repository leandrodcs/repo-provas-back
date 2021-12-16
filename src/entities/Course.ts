// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import Teacher from './Teacher';

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToMany(() => Teacher, (teacher) => teacher.courses)
        teachers: Teacher[];
}
