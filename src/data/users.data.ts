import type { User } from "../components/users-table/users-table.types";

export const users: User[] = [
  {
    id: "user-1",
    name: "Aiko Tanaka",
    email: "aiko.tanaka@example.com",
    city: "Tokyo",
    phone: "+81 90 1234 5678",
    role: "Owner",
    status: "Active",
    properties: [
      {
        id: "property-1",
        title: "Shibuya Modern Apartment",
        address: "1-12-8 Jingumae, Shibuya, Tokyo",
        monthlyPrice: 285000,
        bedrooms: 2,
        status: "available",
      },
      {
        id: "property-2",
        title: "Roppongi Family Residence",
        address: "2-14-5 Roppongi, Minato, Tokyo",
        monthlyPrice: 340000,
        bedrooms: 3,
        status: "rented",
      },
    ],
  },
  {
    id: "user-2",
    name: "Kenji Sato",
    email: "kenji.sato@example.com",
    city: "Osaka",
    phone: "+81 80 8765 4321",
    role: "Manager",
    status: "Active",
    properties: [
      {
        id: "property-3",
        title: "Namba City Apartment",
        address: "3-5-14 Namba, Chuo, Osaka",
        monthlyPrice: 210000,
        bedrooms: 1,
        status: "maintenance",
      },
    ],
  },
  {
    id: "user-3",
    name: "Yui Nakamura",
    email: "yui.nakamura@example.com",
    city: "Kyoto",
    phone: "+81 70 2468 1357",
    role: "Tenant",
    status: "Inactive",
    properties: [
      {
        id: "property-4",
        title: "Traditional Kyoto House",
        address: "25-7 Gionmachi, Higashiyama, Kyoto",
        monthlyPrice: 260000,
        bedrooms: 3,
        status: "available",
      },
    ],
  },
];
