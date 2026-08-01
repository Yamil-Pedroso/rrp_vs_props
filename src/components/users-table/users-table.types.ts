export type PropertyStatus = "available" | "rented" | "maintenance";

export type Property = {
  id: string;
  title: string;
  address: string;
  monthlyPrice: number;
  bedrooms: number;
  status: PropertyStatus;
};

export type User = {
  id: string;
  name: string;
  email: string;
  city: string;
  phone: string;
  role: "Owner" | "Manager" | "Tenant";
  status: "Active" | "Inactive";
  properties: Property[];
};

export type UsersTableVariant = "compact" | "full";

export type UsersTableProps = {
  users: User[];
  title?: string;
  defaultExpandedUserId?: string | null;
  variant?: UsersTableVariant;
};
