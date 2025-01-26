import { RootRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<RootRouter>({});
  