
export interface Motorhome {
  id: number;
  name: string;
  brand: string;
  type: string;
  berths: number;
  price: string;
  year: number;
  isNew: boolean;
  isOffer?: boolean;
  availability?: string;
  sourceUrl?: string;
  sourceCheckedAt?: string;
  mileage?: string;
  chassis?: string;
  endLayout?: string;
  bedroomLayout?: string;
  bhp?: string;
  gears?: string;
  payload?: string;
  unladenWeight?: string;
  seatBelts?: string;
  length: string;
  weight: string;
  transmission: string;
  fuel: string;
  engine: string;
  description: string;
  features: string[];
  images: string[];
}

export const motorhomes: Motorhome[] = [];

export const getMotorhomesByType = (type: string): Motorhome[] => {
  return motorhomes.filter((m) => m.type.toLowerCase() === type.toLowerCase());
};

export const getMotorhomesByBerths = (berths: number): Motorhome[] => {
  return motorhomes.filter((m) => m.berths === berths);
};

