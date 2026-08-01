import type { ExpandableTableItem } from "../components/expandable-table/expandable-table.types";

export const helpCenterItems: ExpandableTableItem[] = [
  {
    id: "getting-started",
    title: "Getting started",
    description: "Basic information about the platform",
    badge: "Popular",
    content: (
      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          Start by creating your profile and completing the required
          information.
        </p>

        <p>
          Once your profile is ready, you can explore properties, save
          favourites and manage your reservations.
        </p>
      </div>
    ),
  },
  {
    id: "account-settings",
    title: "Account settings",
    description: "Manage your personal information",
    content: (
      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          You can update your name, email address, preferred language and
          notification preferences from the account settings page.
        </p>

        <button
          type="button"
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          Open account settings
        </button>
      </div>
    ),
  },
  {
    id: "payments",
    title: "Payments and invoices",
    description: "Payment methods, receipts and billing",
    content: (
      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          Supported payment methods include credit cards, bank transfers and
          selected digital wallets.
        </p>

        <ul className="list-inside list-disc space-y-1">
          <li>Download your invoices.</li>
          <li>Update your billing address.</li>
          <li>Review previous payments.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "cancellations",
    title: "Cancellations",
    description: "Learn about cancellation conditions",
    content: (
      <div className="space-y-3 text-sm leading-6 text-slate-600">
        <p>
          Cancellation conditions depend on the property and the selected
          reservation plan.
        </p>

        <p>
          Always review the applicable policy before confirming a reservation.
        </p>
      </div>
    ),
  },
];
