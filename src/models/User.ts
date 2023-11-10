import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;    

    @Column()
    fullName!: string;

    @Column()
    email!: string;

    @CreateDateColumn({ name: 'created_at', nullable: false })
    createdAt!: Date;
  
    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    updatedAt!: Date;
}

export default User;