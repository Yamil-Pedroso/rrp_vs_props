import type { ReactNode } from "react";

export type ExpandableTableItem = {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  content: ReactNode;
};

export type ExpandableTableProps = {
  title?: string;
  subtitle?: string;
  items: ExpandableTableItem[];
  defaultExpandedId?: string | null;
  className?: string;
};
