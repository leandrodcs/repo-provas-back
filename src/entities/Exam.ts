// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
