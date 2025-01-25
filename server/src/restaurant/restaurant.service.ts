import { Injectable } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
import { iRestaurantData } from './type';

@Injectable()
export class RestaurantService {
    constructor(
        // private prisma: PrismaService
    ) {}

    async createRestaurant(data: iRestaurantData) {
        // return this.prisma.restaurant.create({
        //     data
        // })
    }

    async getAllRestaurant() {
        // return this.prisma.restaurant.findMany()
    }
}
