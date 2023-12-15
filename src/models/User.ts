import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Position from "./Position";
import Task from "./Task";

@Entity()
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    full_name!: string;

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @ManyToOne(() => Position, position => position.users)
    @JoinColumn({ name: 'id_position_fk' })
    position!: Position | number;

    @OneToMany(() => Task, task => task.user)
    tasks!: Task[];

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;
}

export default User;