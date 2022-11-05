import { Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class OrdersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false})
    userId: string;

    @PrimaryColumn({ type: 'uuid', nullable: false})
    cartId: string;

    @Column({ type: 'json', nullable: false})
    payment: string;

    @Column({ type: 'json', nullable: false})
    delivery: string;

    @Column({ type: 'text'})
    comments: string;

    @Column({ type: 'text', nullable: false})
    status: string;

    @Column({ type: 'integer', nullable: false})
    total: number;

}
