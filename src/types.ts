export type ScreenType = 
  | 'HOME'
  | 'UNDERSTANDING'
  | 'PROPOSAL'
  | 'BOOKING_PROGRESS'
  | 'BOOKING_COMPLETION'
  | 'CANCELLATION'
  | 'ALTERNATIVE'
  | 'REBOOKING'
  | 'DASHBOARD';

export interface TripData {
  departure: string;
  destination: string;
  nights: number;
  days: number;
  transportation: 'flight' | 'shinkansen';
  hotel: string;
  sightseeing: string[];
  totalPrice: number;
}

export const INITIAL_TRIP_DATA: TripData = {
  departure: 'Tokyo',
  destination: 'Kyoto',
  nights: 2,
  days: 3,
  transportation: 'flight',
  hotel: 'Mid-range hotel near Kyoto Station',
  sightseeing: ['Kiyomizu Temple', 'Fushimi Inari Shrine', 'Arashiyama'],
  totalPrice: 1250,
};

export const ALTERNATIVE_TRIP_DATA: TripData = {
  ...INITIAL_TRIP_DATA,
  transportation: 'shinkansen',
  totalPrice: 1100,
};
