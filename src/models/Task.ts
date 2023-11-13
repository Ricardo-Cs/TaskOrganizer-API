import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

@Entity()
class Task {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;
  
    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;

    @ManyToOne(() => User, user => user.tasks)
    @JoinColumn({ name: 'id_user_fk' })
    user!: User | Number;
}

export default Task;