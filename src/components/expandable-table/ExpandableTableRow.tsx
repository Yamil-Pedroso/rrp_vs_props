import type { ExpandableTableItem } from "./expandable-table.types";

type ExpandableTableRowProps = {
  item: ExpandableTableItem;
  isExpanded: boolean;
  onToggle: (itemId: string) => void;
};

export function ExpandableTableRow({
  item,
  isExpanded,
  onToggle,
}: ExpandableTableRowProps) {
  const contentId = `expandable-content-${item.id}`;
  const buttonId = `expandable-button-${item.id}`;

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={() => onToggle(item.id)}
        className={[
          "flex w-full items-center justify-between gap-4",
          "px-4 py-4 text-left transition-colors",
          "hover:bg-slate-50",
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-inset",
          "focus-visible:ring-slate-900",
          isExpanded ? "bg-slate-50" : "bg-white",
        ].join(" ")}
      >
        <span className="min-w-0">
          <span className="flex items-center gap-2">
            <span className="font-medium text-slate-900">{item.title}</span>

            {item.badge && (
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                {item.badge}
              </span>
            )}
          </span>

          {item.description && (
            <span className="mt-1 block text-sm text-slate-500">
              {item.description}
            </span>
          )}
        </span>

        <span
          aria-hidden="true"
          className={[
            "flex h-8 w-8 shrink-0 items-center justify-center",
            "rounded-full border border-slate-200 bg-white",
            "text-lg text-slate-600 transition-transform",
            isExpanded ? "rotate-45" : "rotate-0",
          ].join(" ")}
        >
          +
        </span>
      </button>

      {isExpanded && (
        <div
          id={contentId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-slate-100 bg-slate-50 px-4 py-5"
        >
          {item.content}
        </div>
      )}
    </div>
  );
}
