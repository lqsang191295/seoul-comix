import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { RestaurantService } from './restaurant.service';
import { iRestaurantData } from './type';
import { z } from 'zod';
import { restaurantSchema } from './restaurant.schema';

@Router({alias: 'restaurants'})
export class RestaurantRouter {
    constructor(private readonly restaurantService: RestaurantService) {

    }

    @Query({
        input: restaurantSchema
    })
    createRestaurant(@Input('data') data: iRestaurantData) {
        return this.restaurantService.createRestaurant(data)
    }
}