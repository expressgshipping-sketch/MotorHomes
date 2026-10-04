
export interface Campervan {
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

export const campervans: Campervan[] = [];


