import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('teachers_courses')
export default class TeacherCourse {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        teacher_id: number;

    @Column()
        course_id: number;
}
