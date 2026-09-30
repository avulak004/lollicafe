export type FoodCategory =
  | "all"
  | "coffee"
  | "tea"
  | "breakfast"
  | "burgers"
  | "pizza"
  | "pasta"
  | "sandwiches"
  | "desserts"
  | "cold-drinks"
  | "fresh-juices"
  | "mocktails"
  | "shakes";

export type ItemType = "drink" | "food";

export interface CategoryInfo {
  id: FoodCategory;
  name: string;
  tagline: string;
  icon: string;
  image: string;
  itemCount: number;
  type: ItemType;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in INR (₹)
  category: FoodCategory;
  type: ItemType;
  isVeg: boolean;
  rating: number;
  reviewCount: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  tag?: "Bestseller" | "Chef Special" | "Popular" | "Must Try" | "Signature";
  prepTime?: string;
  calories?: string;
  isAvailable?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedTable?: string;
}

export interface CafeFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface OpeningHourDay {
  days: string;
  hours: string;
  isWeekend?: boolean;
}
