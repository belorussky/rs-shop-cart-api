import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { CartDB } from './cart.entity';

@Entity()
export class CartItemsDB {
    @PrimaryColumn({ type: 'uuid', nullable: false})
    cartId: string;

    @Column({ type: 'uuid', nullable: false})
    productId: string;

    @Column({ type: 'integer', nullable: false})
    count: number;

    @ManyToOne(() => CartDB)
    @JoinColumn({name: 'cart_id', referencedColumnName: 'id'})
    cart: CartDB;
}