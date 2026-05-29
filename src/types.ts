/**
 * TypeScript definitions for 88 Homestay interactive website.
 */

export interface Room {
  id: string;
  name: string;
  beds: string;
  bathroom: string;
  capacity: string;
  description: string;
  imageUrl: string;
  amenities: string[];
  size?: string;
  badge?: string;
}

export interface Amenity {
  id: string;
  iconName: string; // Dynamic icon rendering name
  title: string;
  description?: string;
}

export interface HouseRule {
  id: string;
  title: string;
  description: string;
  isAccent?: boolean;
}

export interface Attraction {
  id: string;
  name: string;
  duration: string;
  description: string;
  imageUrl: string;
  history?: string;
}

export interface FoodSpot {
  id: string;
  name: string;
  category: string;
  distance: string;
  specialty: string;
  description: string;
  imageUrl: string;
  isPopular?: boolean;
}

export interface BookingChannel {
  id: string;
  name: string;
  logo: string;
  url: string;
  description: string;
  colorClass: string;
}

export interface SocialChannel {
  id: string;
  name: string;
  username: string;
  url: string;
  iconName: string;
  colorClass: string;
}

export interface HostProfile {
  name: string;
  role: string;
  languages: string[];
  bio: string;
  avatarUrl: string;
  quotes: string;
}
