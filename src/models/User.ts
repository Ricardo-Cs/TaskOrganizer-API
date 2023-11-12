import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import Position from "./Position";

@Entity()
class User {
    @PrimaryColumn()
    id!: string;    

    @Column()
    full_name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @ManyToOne(() => Position, position => position.users)
    @JoinColumn({ name: 'position_id' })
    position!: Position | number;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;
  
    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}

export default User;