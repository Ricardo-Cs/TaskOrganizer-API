import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity()
class Position {
    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

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

export default Position;