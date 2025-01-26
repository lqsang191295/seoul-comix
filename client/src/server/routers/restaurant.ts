import { procedure, router } from "../trpc";
import { prisma } from "@/db";

export const restaurantRouter = router({
    getRestaurants: procedure.query(() => {
        return prisma.restaurant.findMany()
    }),
})