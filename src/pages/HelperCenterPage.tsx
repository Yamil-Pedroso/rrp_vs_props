import { ExpandableTable } from "../components/expandable-table/ExpandableTable";
import { helpCenterItems } from "../data/help-center.data";

const HelpCenterPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-6">
          <p className="text-sm font-medium text-slate-500">Support</p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Help Center
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Find answers to common questions about your account, payments and
            reservations.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside>
          <div className="lg:sticky lg:top-6">
            <ExpandableTable
              title="Quick navigation"
              subtitle="Select a category"
              items={helpCenterItems}
            />
          </div>
        </aside>

        <section className="min-w-0">
          <ExpandableTable
            title="Frequently asked questions"
            subtitle="The first section is open by default"
            items={helpCenterItems}
            defaultExpandedId="getting-started"
          />
        </section>
      </main>
    </div>
  );
};
export default HelpCenterPage;
