import { z } from 'zod'

export const restaurantSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    details: z.object({
        description: z.string().optional(),
        rating: z.number().optional()
    })
});

export type Restaurant = z.infer<typeof restaurantSchema>;