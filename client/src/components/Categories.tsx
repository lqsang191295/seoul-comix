import { textByStoreCategory } from "@/types/Category";
import clsx from "clsx";
import { getAllCategories } from "@/app/api/categories";

export default async function Categories() {
  const data = await getAllCategories();
  const keysCategory = Object.keys(data);
  const currentCategory = keysCategory[0];

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
          >
            {textByStoreCategory[key]}
          </div>
        );
      })}
    </div>
  );
}
