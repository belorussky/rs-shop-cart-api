import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    UsersModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
