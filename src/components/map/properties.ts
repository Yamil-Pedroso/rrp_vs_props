export type Property = {
  id: number;
  title: string;
  address: string;
  price: number;
  latitude: number;
  longitude: number;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Shibuya Modern House",
    address: "1-12-8 Jingumae, Shibuya, Tokyo",
    price: 2850,
    longitude: 139.6917,
    latitude: 35.6895,
  },
  {
    id: 2,
    title: "Shinjuku City Apartment",
    address: "3-4-2 Nishi-Shinjuku, Tokyo",
    price: 2400,
    latitude: 35.6896,
    longitude: 139.6917,
  },
  {
    id: 3,
    title: "Minato Family Residence",
    address: "2-14-5 Roppongi, Minato, Tokyo",
    price: 3200,
    latitude: 35.6628,
    longitude: 139.7314,
  },
];
