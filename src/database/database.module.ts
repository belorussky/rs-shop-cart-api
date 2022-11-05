import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import {SnakeNamingStrategy} from 'typeorm-naming-strategies';
import { CartEntity } from './entities/cart.entity';
import { CartItemEntity } from './entities/cart-items.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.PG_HOST,
            port: +process.env.PG_PORT,
            username: process.env.PG_USERNAME,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE,
            entities: ['dist/datbase/entities/*.entity{.ts, .js}'],
            logging: true,
            namingStrategy: new SnakeNamingStrategy(),
        }),
        TypeOrmModule.forFeature([CartEntity, CartItemEntity]),
    ],
    exports: [TypeOrmModule],
})

export class DatabaseModule {}