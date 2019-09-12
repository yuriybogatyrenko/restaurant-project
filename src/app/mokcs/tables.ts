import {IRestaurantTable, RestaurantTableTypeEnum} from '../interfaces/restaurant-table.interface';

export const tables: IRestaurantTable[] = [
  {
    id: 1,
    title: 'VIP 21',
    number: 22,
    count: 2,
    gallery: [],
    position: {
      x: 350,
      y: 93,
      width: 27,
      height: 60,
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
      x: 320,
      y: 290,
      width: 30,
      height: 60,
      rotate: 0
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
      x: 875,
      y: 370,
      width: 90,
      height: 100,
      rotate: 90
    },
    type: RestaurantTableTypeEnum.ROUND
  },

];
