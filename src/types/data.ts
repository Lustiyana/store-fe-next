/** @format */

export type Menu = {
  id: number;
  name: string;
  url: string;
  caption: string;
};

export type ProductTypes = {
  product_id: number;
  product_name: string;
  description: string;
  user_id: number;
  category_id: number;
  price: number;
  images: ImageTypes[];
};

export type CategoryTypes = {
  category_id: number;
  category_name: string;
  icon: string;
  products: ProductTypes[];
};

export type ImageTypes = {
  image_id: number;
  product_id: number;
  alt: string;
  url: string;
};
