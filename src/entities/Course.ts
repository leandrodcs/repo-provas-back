import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
