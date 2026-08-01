import { useState } from "react";

import { ExpandableTableRow } from "./ExpandableTableRow";

import type { ExpandableTableProps } from "./expandable-table.types";

export function ExpandableTable({
  title,
  subtitle,
  items,
  defaultExpandedId = null,
  className = "",
}: ExpandableTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(
    defaultExpandedId,
  );

  const handleToggle = (itemId: string) => {
    setExpandedId((currentExpandedId) => {
      if (currentExpandedId === itemId) {
        return null;
      }

      return itemId;
    });
  };

  return (
    <section
      className={[
        "overflow-hidden rounded-2xl",
        "border border-slate-200 bg-white shadow-sm",
        className,
      ].join(" ")}
    >
      {(title || subtitle) && (
        <header className="border-b border-slate-200 px-4 py-4">
          {title && <h2 className="font-semibold text-slate-900">{title}</h2>}

          {subtitle && (
            <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
          )}
        </header>
      )}

      <div>
        {items.map((item) => (
          <ExpandableTableRow
            key={item.id}
            item={item}
            isExpanded={expandedId === item.id}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
}
