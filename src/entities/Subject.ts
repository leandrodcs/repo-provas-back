// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import Course from './Course';
import Exam from './Exam';
import Period from './Period';
import Teacher from './Teacher';

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @OneToOne(() => Period, { eager: true })
    @JoinColumn({ name: 'period_id' })
        period: Period;

    @ManyToMany(() => Course, (course) => course.subjects)
        courses: Course[];

    @OneToMany(() => Exam, (exam) => exam.id)
    @JoinColumn()
        exams: Exam[];

    @ManyToMany(() => Teacher, (teacher) => teacher.id)
    @JoinTable({
        name: 'teachers_subjects',
        joinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'teacher_id',
            referencedColumnName: 'id',
        },
    })
        teachers: Teacher[];
}
