import {IRestaurantTable, RestaurantTableStatusEnum, RestaurantTableTypeEnum} from '@interfaces/restaurant-table.interface';
import {IReservation} from '@interfaces/reservation.interface';

export const reservationStart = [
  {title: '16:00', value: 16 * 60},
  {title: '16:30', value: 16.5 * 60},
  {title: '17:00', value: 17 * 60},
  {title: '17:30', value: 17.5 * 60},
  {title: '18:00', value: 18 * 60},
  {title: '18:30', value: 18.5 * 60},
  {title: '19:00', value: 19 * 60},
  {title: '19:30', value: 19.5 * 60},
  {title: '20:00', value: 20 * 60},
  {title: '20:30', value: 20.5 * 60},
  {title: '21:00', value: 21 * 60},
  {title: '21:30', value: 21.5 * 60},
  {title: '22:00', value: 22 * 60},
  {title: '22:30', value: 22.5 * 60},
  {title: '23:00', value: 23 * 60, disabled: true},
  {title: '23:30', value: 23.5 * 60, disabled: true},
  {title: '24:00', value: 24 * 60, disabled: true},
];

export const reservationDuration = [
  {title: '1 час', shortTitle: '1', value: 1},
  {title: '2 часа', shortTitle: '2', value: 2},
  {title: '3 часа', shortTitle: '3', value: 3},
  {title: '4+ часов', shortTitle: '4+', value: 4},
];

export const tableTimeline: IReservation[] = [
  {
    id: 1,
    timeStart: 17 * 60,
    timeEnd: 20 * 60,
    name: 'Петр',
    tableId: 5,
    date: '02/21/1989',
    guestsCount: 5,
    phone: '12312313123123',
    status: 'ACTIVE'
  },
];

const tableDefault = {
  id: 1,
  title: 'VIP 21',
  number: 1,
  count: 2,
  gallery: [],
  position: {
    x: 117,
    y: 244,
    width: 30,
    height: 46,
    rotate: 0
  },
  type: RestaurantTableTypeEnum.POLYGON,
  status: RestaurantTableStatusEnum.DEFAULT,
  _timeline: [
    ...tableTimeline
  ]
};

export const tables: IRestaurantTable[] = [
  {
    id: 1,
    title: 'VIP 21',
    number: 1,
    count: 2,
    gallery: [],
    position: {
      x: 117,
      y: 244,
      width: 30,
      height: 46,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 20 * 60,
        timeEnd: 22.5 * 60,
        status: 'CANCELED'
      },
      {
        id: 1,
        timeStart: 22.5 * 60,
        timeEnd: 24 * 60,
        status: 'PENDING'
      },
    ]
  },
  {
    id: 2,
    title: 'VIP 21',
    number: 2,
    count: 2,
    gallery: [],
    position: {
      x: 117,
      y: 198,
      width: 30,
      height: 46,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60,
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 3,
    count: 2,
    gallery: [],
    position: {
      x: 117,
      y: 151,
      width: 30,
      height: 46,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 23,
    count: 2,
    gallery: [],
    position: {
      x: 99,
      y: 363,
      width: 61,
      height: 30,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 22,
    count: 2,
    gallery: [],
    position: {
      x: 99,
      y: 449,
      width: 61,
      height: 30,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 21,
    count: 2,
    gallery: [],
    position: {
      x: 99,
      y: 536,
      width: 61,
      height: 30,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 20,
    count: 2,
    gallery: [],
    position: {
      x: 99,
      y: 620,
      width: 61,
      height: 30,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 49,
    count: 2,
    gallery: [],
    position: {
      x: 324,
      y: 127,
      width: 30,
      height: 59,
      rotate: 0
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 48,
    count: 2,
    gallery: [],
    position: {
      x: 328,
      y: 227,
      width: 30,
      height: 30,
      rotate: -6.07
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    ...tableDefault,
    number: 47,
    position: {
      x: 449,
      y: 217,
      width: 45,
      height: 30,
      rotate: -6.55
    }
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 41,
    count: 2,
    gallery: [],
    position: {
      x: 314,
      y: 336,
      width: 45,
      height: 30,
      rotate: -7.21
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    id: 3,
    title: 'VIP 21',
    number: 40,
    count: 2,
    gallery: [],
    position: {
      x: 325,
      y: 420,
      width: 45,
      height: 30,
      rotate: -7.21
    },
    type: RestaurantTableTypeEnum.POLYGON,
    status: RestaurantTableStatusEnum.DEFAULT,
    _timeline: [
      ...tableTimeline,
      {
        id: 1,
        timeStart: 21.5 * 60,
        timeEnd: 24 * 60
      },
    ]
  },
  {
    ...tableDefault,
    number: 42,
    position: {
      x: 401,
      y: 393,
      width: 30,
      height: 59,
      rotate: -8.2
    },
    status: RestaurantTableStatusEnum.BLOCKED
  },
  {
    ...tableDefault,
    number: 43,
    position: {
      x: 390,
      y: 325,
      width: 30,
      height: 59,
      rotate: -8.2
    }
  },
  {
    ...tableDefault,
    number: 24,
    position: {
      x: 216,
      y: 628,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 25,
    position: {
      x: 216,
      y: 545,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 36,
    position: {
      x: 256,
      y: 628,
      width: 61,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 37,
    position: {
      x: 256,
      y: 545,
      width: 61,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 38,
    position: {
      x: 245,
      y: 436,
      width: 45,
      height: 30,
      rotate: -7.21
    }
  },
  {
    ...tableDefault,
    number: 30,
    position: {
      x: 375,
      y: 585,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 31,
    position: {
      x: 415,
      y: 585,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 32,
    position: {
      x: 455,
      y: 585,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 33,
    position: {
      x: 495,
      y: 585,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 34,
    position: {
      x: 394,
      y: 497,
      width: 30,
      height: 59,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 35,
    position: {
      x: 477,
      y: 497,
      width: 30,
      height: 59,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 44,
    type: RestaurantTableTypeEnum.ROUND,
    position: {
      x: 502,
      y: 394,
      width: 30,
      height: 59,
      rotate: -7.21
    }
  },
  {
    ...tableDefault,
    number: 44.1,
    position: {
      x: 519,
      y: 455,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 45,
    type: RestaurantTableTypeEnum.ROUND,
    position: {
      x: 491,
      y: 328,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 46,
    type: RestaurantTableTypeEnum.ROUND,
    position: {
      x: 482,
      y: 264,
      width: 30,
      height: 30,
      rotate: 0
    }
  },
  {
    ...tableDefault,
    number: 50,
    position: {
      x: 585,
      y: 488,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 50.1,
    position: {
      x: 574,
      y: 422,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 51,
    position: {
      x: 650,
      y: 489,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 52,
    position: {
      x: 638,
      y: 430,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 53,
    position: {
      x: 715,
      y: 488,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 54,
    position: {
      x: 701,
      y: 428,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 55,
    position: {
      x: 780,
      y: 488,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 56,
    position: {
      x: 764,
      y: 426,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 57,
    position: {
      x: 743,
      y: 368,
      width: 24,
      height: 24,
      rotate: 24.07
    }
  },
  {
    ...tableDefault,
    number: 58,
    position: {
      x: 825,
      y: 430,
      width: 47,
      height: 30,
      rotate: -21.26
    }
  },
  {
    ...tableDefault,
    number: 59,
    position: {
      x: 796,
      y: 359,
      width: 47,
      height: 30,
      rotate: -21.26
    }
  },
  {
    ...tableDefault,
    number: 60,
    position: {
      x: 941,
      y: 560,
      width: 47,
      height: 30,
      rotate: -21.26
    }
  },
  {
    ...tableDefault,
    number: 61,
    position: {
      x: 876,
      y: 410,
      width: 47,
      height: 30,
      rotate: -21.26
    }
  },
  {
    ...tableDefault,
    number: 62,
    position: {
      x: 847,
      y: 340,
      width: 47,
      height: 30,
      rotate: -21.26
    }
  },
  {
    ...tableDefault,
    number: 63,
    position: {
      x: 1052,
      y: 512,
      width: 47,
      height: 30,
      rotate: -23.79
    }
  },
  {
    ...tableDefault,
    number: 64,
    position: {
      x: 1013,
      y: 443,
      width: 61,
      height: 30,
      rotate: -23.18
    }
  },
  {
    ...tableDefault,
    number: 65,
    position: {
      x: 976,
      y: 371,
      width: 61,
      height: 30,
      rotate: -23.18
    }
  },
  {
    ...tableDefault,
    number: 66,
    position: {
      x: 937,
      y: 275 + 23,
      width: 61,
      height: 30,
      rotate: -23.18
    }
  },
  {
    ...tableDefault,
    number: 67,
    position: {
      x: 897,
      y: 201 + 23,
      width: 61,
      height: 30,
      rotate: -23.18
    }
  }
].map((item, index) => {
  return {...item, id: index + 1};
});
