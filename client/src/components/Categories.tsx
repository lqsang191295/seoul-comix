"use client";

import { useContext, useEffect, useState } from "react";
import { textByStoreCategory } from "@/types/Category";
import clsx from "clsx";
import { getAllCategories } from "@/app/api/categories";
import MyContext from "@/app/MyContext";

export default function Categories() {
  const { currentCategory, setCurrentCategory } = useContext(MyContext);
  const [keysCategory, setKeysCategory] = useState<string[]>([]);

  const fetchData = async () => {
    const data = await getAllCategories();
    const keys = Object.keys(data);

    setKeysCategory(keys);
  };

  const handleClickCategory = (key: string) => () => {
    setCurrentCategory(key);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex mt-2 overflow-x-auto no-scrollbar">
      {keysCategory.map((key, index) => {
        return (
          <div
            key={index}
            className={clsx(
              "rounded-md p-2 text-xs mr-2 whitespace-nowrap cursor-pointer hover:bg-[#f7fbff]",
              currentCategory === key ? "bg-[#f7fbff]" : ""
            )}
            onClick={handleClickCategory(key)}
          >
            {textByStoreCategory[key]}
          </div>
        );
      })}
    </div>
  );
}
