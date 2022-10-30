import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CartItemsDB } from './cart-items.entity';

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
}