import Link from "next/link";
import SlideImage from "./SlideImage";
import React from "react";
import { iRestaurantData } from "@/types/Restaurant";
import clsx from "clsx";

export default function ItemBlock({
  id,
  name,
  images,
  desc,
  featured,
  price_range,
  rating,
  rating_count,
  isFavorite,
  onFavorite,
}: iRestaurantData & { onFavorite: () => void }) {
  const classForFavorite = isFavorite
    ? "bg-[#c65c39a0] hover:bg-[#c65c39d9]"
    : "bg-[#cccccca0] hover:bg-[#ccccccd9]";
  const classForIconFavorite = isFavorite ? "text-[#ff2929]" : "text-zinc-50";

  const handleClickFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onFavorite();
  };

  return (
    <Link
      href={`/restaurant/${id}`}
      className="flex flex-col grow cursor-pointer"
    >
      <div className="rounded-md relative h-64 overflow-hidden">
        <SlideImage data={images} />
        <div
          className={clsx(
            "absolute right-3 top-2 rounded-[50%] p-2 z-40",
            classForFavorite
          )}
          onClick={handleClickFavorite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={clsx("size-5 ", classForIconFavorite)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>
      </div>
      {/* Label */}
      <div className="flex mt-2 text-[#e78d6c] leading-[0]">
        <div className="pr-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
        </div>
        <div className="flex flex-1 items-center text-xs">{featured.text}</div>
      </div>
      {/* Name & Star */}
      <div className="flex mt-2 items-center">
        <div className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-semibold text-sm  hover:text-[#2196f3]">
          {name}
        </div>
        <div className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 fill-[#f7b226] stroke-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <div className="text-xs">
            {rating}({rating_count})
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="text-xs text-[#a0a1a7] mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {desc}
      </div>
      {/* Price */}
      <div className="text-xs text-[#a0a1a7] mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
        제품 가격 . {price_range}가격
      </div>
    </Link>
  );
}
