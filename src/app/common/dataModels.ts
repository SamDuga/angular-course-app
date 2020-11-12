export interface ConferenceEvent {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    imageUrl?: string;
    location?: Location
    onlineUrl?: string;
    sessions?: Array<EventSession>
}

export interface Location {
    address: string;
    city: string;
    country: string;
}

export interface EventSession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: Array<string>;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}
