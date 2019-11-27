export interface IReservation {
  id?: number;
  client: {
    name: string;
    phone: string;
    comment: string;
  };
  num_guests: number;
  date_created?: string;
  date_start: number;
  date_end?: number;
  duration?: number;
  table_id: number;
  table_number?: string | number;
  paid?: boolean;
  status?: 'ACTIVE' | 'PENDING' | 'CANCELED';
}

export interface IReservationTime {
  title: string;
  value: number;
  disabled?: boolean;
}
