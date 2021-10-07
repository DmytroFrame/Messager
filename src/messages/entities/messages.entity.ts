import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";



@Entity('messages')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    message: string

    @Column()
    sender: number

    @Column()
    recipient: number

    @Column('boolean', {default: false})
    isRead: boolean

    @CreateDateColumn()
    isCreate: Date
}