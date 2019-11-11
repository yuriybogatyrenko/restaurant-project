export interface IRestaurantTable {
  id: number;
  uuid?: string;
  title: string;
  number: number;
  count: number;
  gallery: IRestaurantTableGalleryItem[];
  type: RestaurantTableTypeEnum;
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
  status: RestaurantTableStatusEnum;
  _timeline?: IRestaurantTableTimeline[];
}

export interface IRestaurantTableTimeline {
  id: number;
  timeStart: number;
  timeEnd: number;
  guestsCount?: number;
  status?: string;
}

export enum RestaurantTableStatusEnum {
  BLOCKED = 'blocked',
  ACTIVE = 'selected',
  DEFAULT = 'available'
}

export enum RestaurantTableTypeEnum {
  SQUARE = 'square',
  ROUND = 'round',
  POLYGON = 'polygon'
}

export interface IRestaurantTableGalleryItem {
  src: string;
  height: number;
  width: number;
  isMain?: boolean;
}
