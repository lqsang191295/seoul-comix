"use client";

import { useContext, useEffect, useState } from "react";
import ItemBlock from "./ItemBlock";
import MyContext from "@/app/MyProvider";
import { iRestaurantData } from "@/types/Restaurant";
import { STORE_CATEGORY } from "@/types/Category";
import { trpc } from "@/client";

export default function ItemsContainer() {
  const { data } = trpc.restaurant.getRestaurants.useQuery();
  const { searchText, currentCategory } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [backupDataRestaurant, setBackupDataRestaurant] = useState<
    iRestaurantData[]
  >([]);
  const [dataRestaurant, setDataRestaurant] = useState<iRestaurantData[]>([]);

  const fetchData = () => {
    if (!data) return;
    setIsLoading(false);
    setDataRestaurant(data);
    setBackupDataRestaurant(data);
  };

  const getCategoryValue = (category: string) => {
    // Ép kiểu chuỗi sang kiểu enum hợp lệ
    const validCategory = category as keyof typeof STORE_CATEGORY;
    return STORE_CATEGORY[validCategory];
  };

  const filterItem = () => {
    if (!backupDataRestaurant || !backupDataRestaurant.length) return;

    let data: iRestaurantData[] = [...backupDataRestaurant];

    if (searchText) {
      data = data.filter((d) => {
        return d.name.includes(searchText);
      });
    }

    if (currentCategory) {
      data = data.filter((d) => {
        return d.category === getCategoryValue(currentCategory);
      });
    }

    setDataRestaurant([...data]);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  useEffect(() => {
    if (!searchText && !currentCategory) {
      setDataRestaurant([...backupDataRestaurant]);
      return;
    }

    filterItem();
  }, [searchText, currentCategory]);

  if (isLoading) {
    return (
      <div className="flex flex-wrap flex-row mt-2 w-full overflow-auto gap-4 pb-2 h-full no-scrollbar">
        <div className="w-full h-full flex items-center justify-center text-xs">
          Loading data...
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap flex-row mt-2 w-full overflow-auto gap-4 pb-2 h-full no-scrollbar">
      {dataRestaurant && dataRestaurant.length === 0 && (
        <div className="w-full h-full flex items-center justify-center text-xs">
          No data!
        </div>
      )}
      {dataRestaurant &&
        dataRestaurant.length > 0 &&
        dataRestaurant.map((data, idx) => {
          return <ItemBlock key={idx} {...data} />;
        })}
    </div>
  );
}
