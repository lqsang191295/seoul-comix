import { Module } from '@nestjs/common';
import { TrpcModule } from './trpc/trpc.module';
import { ProductModule } from './products/products.module';
import { PrismaModule } from './prisma/prisma.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { RestaurantController } from './restaurant/restaurant.controller';
import { RestaurantService } from './restaurant/restaurant.service';
import { PrismaService } from './prisma/prisma.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [AppModule
    //, TrpcModule, ProductModule, RestaurantModule
    // , PrismaModule
  ],
  providers: [
    //PrismaService, 
    AppService
    // , RestaurantService
  ],
  controllers: [AppController
    // , RestaurantController
  ],
})

export class AppModule {}
