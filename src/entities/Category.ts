// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categories')
export default class Category {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
