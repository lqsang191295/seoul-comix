import { getAllRestaurants } from "@/app/api/restaurant";
import ItemBlock from "./ItemBlock";

export default async function ItemsContainer() {
  const dataRestaurant = await getAllRestaurants();

  return (
    <div className="flex flex-wrap flex-row mt-2 w-full overflow-auto gap-4 pb-2">
      {dataRestaurant.map((data, idx) => {
        return <ItemBlock key={idx} {...data} />;
      })}
    </div>
  );
}
