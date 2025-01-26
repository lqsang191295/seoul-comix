"use client";

import { createContext, useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "@/client";

interface MyContextType {
  searchText: string;
  setSearchText: (text: string) => void;
  currentCategory: string;
  setCurrentCategory: (text: string) => void;
}

const defaultContext: MyContextType = {
  searchText: "",
  setSearchText: (): void => {},
  currentCategory: "",
  setCurrentCategory: (): void => {},
};

const MyContext = createContext<MyContextType>(defaultContext);

export const MyProvider = ({ children }: { children: ReactNode }) => {
  const [searchText, setSearchText] = useState(defaultContext.searchText);
  const [currentCategory, setCurrentCategory] = useState(
    defaultContext.currentCategory
  );
  const [queryClient] = useState(() => new QueryClient({}));
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <MyContext.Provider
        value={{
          searchText,
          setSearchText,
          currentCategory,
          setCurrentCategory,
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </MyContext.Provider>
    </trpc.Provider>
  );
};

export default MyContext;
