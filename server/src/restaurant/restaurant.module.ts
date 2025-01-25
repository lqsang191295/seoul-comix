import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantRouter } from './restaurant.router';

@Module({
    providers: [RestaurantService, RestaurantRouter]
})
export class RestaurantModule {}
