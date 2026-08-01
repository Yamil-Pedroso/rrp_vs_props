import { Fragment } from "react";

import type {
  PropertyStatus,
  User,
  UsersTableVariant,
} from "./users-table.types";

type UserTableRowProps = {
  idPrefix: string;
  user: User;
  isExpanded: boolean;
  onToggle: (userId: string) => void;
  variant: UsersTableVariant;
  columnCount: number;
};

type UserDetailsProps = {
  user: User;
};

type CompactUserDetailsProps = {
  user: User;
};

type DetailItemProps = {
  label: string;
  value: string;
};

type UserStatusBadgeProps = {
  status: User["status"];
};

const propertyStatusLabels: Record<PropertyStatus, string> = {
  available: "Available",
  rented: "Rented",
  maintenance: "Maintenance",
};

const propertyStatusClasses: Record<PropertyStatus, string> = {
  available: "bg-emerald-100 text-emerald-700",
  rented: "bg-sky-100 text-sky-700",
  maintenance: "bg-amber-100 text-amber-700",
};

export function UserTableRow({
  idPrefix,
  user,
  isExpanded,
  onToggle,
  variant,
  columnCount,
}: UserTableRowProps) {
  const detailsId = `${idPrefix}-user-details-${user.id}`;
  const buttonId = `${idPrefix}-user-toggle-${user.id}`;
  const isCompact = variant === "compact";

  return (
    <Fragment>
      <tr
        className={[
          "border-b border-slate-200 transition-colors",
          "hover:bg-slate-50",
          isExpanded ? "bg-slate-50" : "bg-white",
        ].join(" ")}
      >
        <td className="w-12 px-3 py-4">
          <button
            id={buttonId}
            type="button"
            aria-expanded={isExpanded}
            aria-controls={detailsId}
            aria-label={
              isExpanded
                ? `Close details for ${user.name}`
                : `Open details for ${user.name}`
            }
            onClick={() => onToggle(user.id)}
            className={[
              "flex h-8 w-8 items-center justify-center",
              "rounded-md border border-slate-300 bg-white",
              "text-slate-600 transition-colors",
              "hover:bg-slate-100",
              "focus-visible:outline-none",
              "focus-visible:ring-2",
              "focus-visible:ring-slate-900",
              "focus-visible:ring-offset-1",
            ].join(" ")}
          >
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className={[
                "h-4 w-4 transition-transform duration-200",
                isExpanded ? "rotate-90" : "rotate-0",
              ].join(" ")}
            >
              <path
                d="M7 5l5 5-5 5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </td>

        <td className="px-3 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
              {getInitials(user.name)}
            </div>

            <div className="min-w-0">
              <p className="truncate font-medium text-slate-900">{user.name}</p>

              <p className="truncate text-sm text-slate-500">
                {isCompact ? user.city : user.email}
              </p>
            </div>
          </div>
        </td>

        {isCompact ? (
          <td className="px-3 py-4 text-right text-sm font-medium text-slate-700">
            {user.properties.length}
          </td>
        ) : (
          <>
            <td className="px-4 py-4 text-sm text-slate-600">{user.city}</td>

            <td className="px-4 py-4 text-sm text-slate-600">{user.role}</td>

            <td className="px-4 py-4 text-sm text-slate-600">
              {user.properties.length}
            </td>

            <td className="px-4 py-4">
              <UserStatusBadge status={user.status} />
            </td>
          </>
        )}
      </tr>

      {isExpanded && (
        <tr id={detailsId} className="border-b border-slate-200 bg-slate-50">
          <td colSpan={columnCount} className="px-4 py-5">
            <div role="region" aria-labelledby={buttonId}>
              {isCompact ? (
                <CompactUserDetails user={user} />
              ) : (
                <UserDetails user={user} />
              )}
            </div>
          </td>
        </tr>
      )}
    </Fragment>
  );
}

function CompactUserDetails({ user }: CompactUserDetailsProps) {
  return (
    <div className="space-y-5">
      <dl className="grid grid-cols-2 gap-4">
        <DetailItem label="Role" value={user.role} />

        <DetailItem label="Status" value={user.status} />

        <DetailItem label="Phone" value={user.phone} />

        <DetailItem label="City" value={user.city} />
      </dl>

      <div>
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Properties
          </h3>

          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
            {user.properties.length} total
          </span>
        </div>

        {user.properties.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            No properties available.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {user.properties.map((property) => (
              <li
                key={property.id}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <p className="truncate text-sm font-medium text-slate-900">
                  {property.title}
                </p>

                <p className="mt-1 truncate text-xs text-slate-500">
                  {property.address}
                </p>

                <div className="mt-3 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-slate-700">
                    ¥{property.monthlyPrice.toLocaleString()} / month
                  </span>

                  <PropertyStatusBadge status={property.status} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-[240px_minmax(0,1fr)]">
      <section>
        <h3 className="font-semibold text-slate-900">User information</h3>

        <dl className="mt-4 space-y-4">
          <DetailItem label="Email" value={user.email} />

          <DetailItem label="Phone" value={user.phone} />

          <DetailItem label="City" value={user.city} />

          <DetailItem label="Role" value={user.role} />

          <DetailItem label="Status" value={user.status} />
        </dl>
      </section>

      <section className="min-w-0">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-semibold text-slate-900">Properties</h3>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">
            {user.properties.length} total
          </span>
        </div>

        {user.properties.length === 0 ? (
          <div className="mt-4 rounded-xl border border-slate-200 bg-white px-4 py-6">
            <p className="text-sm text-slate-500">
              This user has no registered properties.
            </p>
          </div>
        ) : (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-[700px] w-full border-collapse text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Property
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Bedrooms
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Monthly price
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                    >
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {user.properties.map((property) => (
                    <tr key={property.id} className="border-t border-slate-200">
                      <td className="px-4 py-4">
                        <p className="font-medium text-slate-900">
                          {property.title}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                          {property.address}
                        </p>
                      </td>

                      <td className="px-4 py-4 text-sm text-slate-600">
                        {property.bedrooms}
                      </td>

                      <td className="px-4 py-4 text-sm font-medium text-slate-900">
                        ¥{property.monthlyPrice.toLocaleString()}
                      </td>

                      <td className="px-4 py-4">
                        <PropertyStatusBadge status={property.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </dt>

      <dd className="mt-1 break-words text-sm text-slate-900">{value}</dd>
    </div>
  );
}

function UserStatusBadge({ status }: UserStatusBadgeProps) {
  const statusClassName =
    status === "Active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-slate-200 text-slate-600";

  return (
    <span
      className={[
        "inline-flex rounded-full px-2.5 py-1",
        "text-xs font-medium",
        statusClassName,
      ].join(" ")}
    >
      {status}
    </span>
  );
}

function PropertyStatusBadge({ status }: { status: PropertyStatus }) {
  return (
    <span
      className={[
        "inline-flex rounded-full px-2.5 py-1",
        "text-xs font-medium",
        propertyStatusClasses[status],
      ].join(" ")}
    >
      {propertyStatusLabels[status]}
    </span>
  );
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
