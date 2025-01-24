"use client";

import { useContext, useEffect, useState } from "react";
import { getAllRestaurants } from "@/app/api/restaurant";
import ItemBlock from "./ItemBlock";
import MyContext from "@/app/MyContext";
import { iRestaurantData } from "@/types/Restaurant";
import { STORE_CATEGORY } from "@/types/Category";

export default function ItemsContainer() {
  const { searchText, currentCategory } = useContext(MyContext);
  const [backupDataRestaurant, setBackupDataRestaurant] = useState<
    iRestaurantData[]
  >([]);
  const [dataRestaurant, setDataRestaurant] = useState<iRestaurantData[]>([]);

  const fetchData = async () => {
    const data = await getAllRestaurants();

    setDataRestaurant(data);
    setBackupDataRestaurant(data);
  };

  const getCategoryValue = (category: string) => {
    // Ép kiểu chuỗi sang kiểu enum hợp lệ
    const validCategory = category as keyof typeof STORE_CATEGORY;
    return STORE_CATEGORY[validCategory];
  };

  const filterItem = () => {
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
  }, []);

  useEffect(() => {
    if (!searchText && !currentCategory) {
      setDataRestaurant([...backupDataRestaurant]);
      return;
    }

    console.log({ searchText, currentCategory });

    filterItem();
  }, [searchText, currentCategory]);

  return (
    <div className="flex flex-wrap flex-row mt-2 w-full overflow-auto gap-4 pb-2">
      {dataRestaurant.map((data, idx) => {
        return <ItemBlock key={idx} {...data} />;
      })}
    </div>
  );
}
