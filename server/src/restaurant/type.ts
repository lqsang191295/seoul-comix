export interface iRestaurantData {
  rating: number;
  rating_count: number;
  category: string;
  city: string;
  desc: string;
  id: string;
  images: string[];
  name: string;
  price_range: string;
  featured: {
    text: string;
    icon: string;
  };
  isFavorite: boolean;
}
