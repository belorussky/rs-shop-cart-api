import { Column, Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { CartEntity } from './cart.entity';

@Entity('Cart_items')
export class CartItemEntity {
    @PrimaryColumn('uuid')
    cartId: string;

    @Column({ type: 'uuid', nullable: false})
    productId: string;

    @Column({ type: 'integer', nullable: false})
    count: number;

    @ManyToOne(() => CartEntity, { nullable: false })
    @JoinColumn({name: 'cart_id', referencedColumnName: 'id'})
    cart: CartEntity;
}