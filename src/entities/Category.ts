// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category')
export default class Category {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
