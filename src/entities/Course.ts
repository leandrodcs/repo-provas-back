// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Subject from './Subject';
import Teacher from './Teacher';

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @ManyToMany(() => Teacher, (teacher) => teacher.id)
    @JoinTable({
        name: 'teachers_courses',
        joinColumn: {
            name: 'course_id',
            referencedColumnName: 'id',

        },
        inverseJoinColumn: {
            name: 'teacher_id',
            referencedColumnName: 'id',
        },
    })
        teachers: Teacher[];

    @ManyToMany(() => Subject, (subject) => subject.id)
    @JoinTable({
        name: 'subjects_courses',
        joinColumn: {
            name: 'course_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id',
        },
    })
        subjects: Subject[];

    getTeachers() {
        return this.teachers;
    }

    getSubjects() {
        return this.subjects;
    }
}
