import { restaurantRouter } from './routers/restaurant';
import { router } from './trpc';

export const rootRouter  = router({
    restaurant: restaurantRouter
})

export type RootRouter = typeof rootRouter;