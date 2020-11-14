export interface ConferenceEvent {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl?: string;
    location?: Location;
    onlineUrl?: string;
    sessions?: EventSession[];
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
  voters: string[];
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
}
