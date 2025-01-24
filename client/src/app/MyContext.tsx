"use client";

import { createContext, useState, ReactNode } from "react";

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

  return (
    <MyContext.Provider
      value={{ searchText, setSearchText, currentCategory, setCurrentCategory }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
