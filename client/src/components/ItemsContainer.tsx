"use client";

import { useContext, useEffect, useState } from "react";
import ItemBlock from "./ItemBlock";
import MyContext from "@/app/MyProvider";
import { iRestaurantData } from "@/types/Restaurant";
import { STORE_CATEGORY } from "@/types/Category";
import { trpc } from "@/client";

type Featured = {
  text: string;
  icon: string;
};

export default function ItemsContainer() {
  const query = trpc.restaurant.getRestaurants.useQuery() as {
    data: iRestaurantData[];
  };
  const data = query.data as iRestaurantData[];
  const { searchText, currentCategory } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [backupDataRestaurant, setBackupDataRestaurant] = useState<
    iRestaurantData[]
  >([]);
  const [dataRestaurant, setDataRestaurant] = useState<iRestaurantData[]>([]);
  const mutation = trpc.restaurant.addFavorite.useMutation<iRestaurantData>();

  const fetchData = () => {
    if (!data) return;
    setIsLoading(false);
    setDataRestaurant(data as iRestaurantData[]);
    setBackupDataRestaurant(data as iRestaurantData[]);
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

  const onFavorite = (item: iRestaurantData) => async () => {
    if (!item || !item.id) return;

    try {
      const input = {
        id: item.id,
        isFavorite: !item.isFavorite,
      };

      const result = await mutation.mutateAsync(input);
      const featured: Featured = result.featured as Featured;
      const data: iRestaurantData = {
        ...result,
        featured,
      };

      updateDataItemRestaurant(data);
    } catch (error) {
      console.error("Lỗi khi cập nhật:", error);
    }
  };

  const updateDataItemRestaurant = (item: iRestaurantData) => {
    const index = dataRestaurant.findIndex((data) => {
      return data.id === item.id;
    });

    if (index < 0) return;

    setDataRestaurant((prevState) => {
      const newData = [...prevState];

      newData[index] = {
        ...newData[index],
        ...item,
      };

      return newData;
    });

    setBackupDataRestaurant((prevState) => {
      const newData = [...prevState];

      newData[index] = {
        ...newData[index],
        ...item,
      };

      return newData;
    });
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
      <div className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center text-xs">
          Loading data...
        </div>
      </div>
    );
  }

  if (dataRestaurant && dataRestaurant.length === 0) {
    return (
      <div className="w-full h-full">
        <div className="w-full h-full flex items-center justify-center text-xs">
          No data!
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2 w-full h-full overflow-auto pb-2 no-scrollbar">
      {dataRestaurant &&
        dataRestaurant.length > 0 &&
        dataRestaurant.map((data, idx) => {
          return (
            <ItemBlock key={idx} {...data} onFavorite={onFavorite(data)} />
          );
        })}
    </div>
  );
}
