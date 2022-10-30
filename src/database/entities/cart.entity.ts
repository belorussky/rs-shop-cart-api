import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CartItemsDB } from './cart-items.entity';
import { OrdersDB } from './orders.entity';

@Entity()
export class CartDB {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date', nullable: false})
    createdAt: Date;

    @Column({ type: 'date', nullable: false})
    updatedAt: Date;

    @OneToMany(() => CartItemsDB, (cartItems) => cartItems.cart)
    @JoinColumn({name: 'id', referencedColumnName: 'cart_id'})
    cartItems: CartItemsDB[];

    @OneToOne(() => OrdersDB)
    @JoinColumn({name: 'id', referencedColumnName: 'cart_id'})
    orders: OrdersDB;
}