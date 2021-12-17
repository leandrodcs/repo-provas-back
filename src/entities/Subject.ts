// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import Course from './Course';
import Period from './Period';

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
}
