import {IRestaurantTable, RestaurantTableTypeEnum} from '../interfaces/restaurant-table.interface';

export const tables: IRestaurantTable[] = [
  {
    id: 1,
    title: 'VIP 21',
    number: 22,
    count: 2,
    gallery: [],
    position: {
      x: 22,
      y: 22,
      width: 30,
      height: 100,
      rotate: 90
    },
    type: RestaurantTableTypeEnum.POLYGON
  },
  {
    id: 2,
    title: 'VIP 22',
    number: 22,
    count: 2,
    gallery: [],
    position: {
      x: 22,
      y: 22,
      width: 300,
      height: 200,
      rotate: 45
    },
    type: RestaurantTableTypeEnum.SQUARE
  },
  {
    id: 3,
    title: 'VIP 23',
    number: 22,
    count: 2,
    gallery: [],
    position: {
      x: 22,
      y: 22,
      width: 30,
      height: 100,
      rotate: 90
    },
    type: RestaurantTableTypeEnum.ROUND
  },

];
