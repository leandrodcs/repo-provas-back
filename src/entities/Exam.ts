// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import Category from './Category';
import Teacher from './Teacher';

@Entity('exams')
export default class Exam {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        exam: string;

    @Column({ name: 'teacher_id' })
        teacherId: number;

    @Column({ name: 'category_id' })
        categoryId: number;

    @Column({ name: 'subject_id' })
        subjectId: number;

    @OneToOne(() => Category, { eager: true })
    @JoinColumn({ name: 'category_id' })
        category: Category;

    @ManyToOne(() => Teacher, (teacher) => teacher.id)
    @JoinColumn({ name: 'teacher_id' })
        teacher: Teacher;
}
