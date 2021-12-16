// eslint-disable-next-line object-curly-newline
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('periods')
export default class Period {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;
}
