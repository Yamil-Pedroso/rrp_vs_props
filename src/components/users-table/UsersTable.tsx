import { useId, useState } from "react";

import { UserTableRow } from "./UsersTableRow";

import type { UsersTableProps } from "./users-table.types";

export function UsersTable({
  users,
  title,
  defaultExpandedUserId = null,
  variant = "full",
}: UsersTableProps) {
  const tableId = useId();
  const [expandedUserId, setExpandedUserId] = useState<string | null>(
    defaultExpandedUserId,
  );

  const handleToggle = (userId: string) => {
    setExpandedUserId((currentUserId) =>
      currentUserId === userId ? null : userId,
    );
  };

  const columnCount = variant === "compact" ? 3 : 6;

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {title && (
        <header className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-slate-900">{title}</h2>
        </header>
      )}

      <div className="overflow-x-auto">
        <table
          className={[
            "w-full border-collapse text-left",
            variant === "full" ? "min-w-[850px]" : "min-w-[380px]",
          ].join(" ")}
        >
          <thead className="bg-slate-100">
            <tr>
              <th scope="col" className="w-12 px-3 py-3">
                <span className="sr-only">Expand row</span>
              </th>

              <th
                scope="col"
                className="px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
              >
                User
              </th>

              {variant === "compact" ? (
                <th
                  scope="col"
                  className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  Properties
                </th>
              ) : (
                <>
                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    City
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Role
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Properties
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  >
                    Status
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserTableRow
                key={user.id}
                idPrefix={tableId}
                user={user}
                isExpanded={expandedUserId === user.id}
                onToggle={handleToggle}
                variant={variant}
                columnCount={columnCount}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
