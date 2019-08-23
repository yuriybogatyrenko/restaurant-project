export interface IRestaurantTable {
  id: number;
  title: string;
  number: number;
  count: number;
  gallery: IRestaurantTableGalleryItem[];
  furniture?: {
    sofa3: number,
    sofa2: number,
    sofa1: number
  };
  position: {
    x: number,
    y: number,
    width: number,
    height: number,
    rotate: number
  };
}

export interface IRestaurantTableGalleryItem {
  src: string;
  height: number;
  width: number;
  isMain?: boolean;
}
