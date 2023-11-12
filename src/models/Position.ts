import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import User from "./User";

@Entity()
class Position {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(() => User, user => user.position)
    users!: User[];
}

export default Position;