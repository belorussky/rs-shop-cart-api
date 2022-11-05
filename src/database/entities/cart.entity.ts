import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { CartItemEntity } from './cart-items.entity';
import { OrdersEntity } from './orders.entity';

@Entity('Carts')
export class CartEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({name: 'created_at', type: Date, nullable: false})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', type: Date, nullable: false})
    updatedAt: Date;

    @OneToMany(() => CartItemEntity, (cartItems) => cartItems.cart)
    @JoinColumn({name: 'id', referencedColumnName: 'cart_id'})
    cartItems: CartItemEntity[];

    @OneToOne(() => OrdersEntity)
    @JoinColumn({name: 'id', referencedColumnName: 'cart_id'})
    orders: OrdersEntity;
}