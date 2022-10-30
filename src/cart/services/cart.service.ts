import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { Cart } from '../models';
import { CartDB } from '../../database/entities/cart.entity';


@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartDB)
    private readonly cartRepo: Repository<CartDB>,
  ) {}

  private userCarts: Record<string, Cart> = {};

  async create(body) {
    try {
      await this.cartRepo.insert(body);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  }

  async findAll() {
    return this.cartRepo.find();
  }

  async findCartById(id: string) {
    return this.cartRepo.findOne({ id });
  }

  async findCartItemsByCartId(id: string) {
    const cartItems = await this.cartRepo.findOne(
      { id },
      { relations: ['cartItems'] },
    );
    return this.cartRepo.find();
  }

  findByUserId(userId: string): Cart {
    return this.userCarts[ userId ];
  }

  createByUserId(userId: string) {
    const id = v4(v4());
    const userCart = {
      id,
      items: [],
    };

    this.userCarts[ userId ] = userCart;

    return userCart;
  }

  findOrCreateByUserId(userId: string): Cart {
    const userCart = this.findByUserId(userId);

    if (userCart) {
      return userCart;
    }

    return this.createByUserId(userId);
  }

  updateByUserId(userId: string, { items }: Cart): Cart {
    const { id, ...rest } = this.findOrCreateByUserId(userId);

    const updatedCart = {
      id,
      ...rest,
      items: [ ...items ],
    }

    this.userCarts[ userId ] = { ...updatedCart };

    return { ...updatedCart };
  }

  removeByUserId(userId): void {
    this.userCarts[ userId ] = null;
  }

}
