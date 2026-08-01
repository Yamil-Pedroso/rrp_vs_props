import { UsersTable } from "../components/users-table/UsersTable";
import { users } from "../data/users.data";
import { UsersTableNotes } from "../components/users-table/UsersTableNotes";

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-5 py-6">
          <p className="text-sm font-medium text-slate-500">
            Property management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Users and properties
          </h1>

          <p className="mt-2 text-slate-600">
            Review users and their registered properties.
          </p>
        </div>
      </header>

      <main
        className={[
          "mx-auto grid max-w-[1600px] items-start gap-6 px-5 py-8",
          "xl:grid-cols-[420px_minmax(0,1fr)]",
        ].join(" ")}
      >
        <aside className="min-w-0">
          <div className=" xl:sticky xl:top-6">
            <UsersTable title="Recent users" users={users} variant="compact" />
            <UsersTableNotes />
          </div>
        </aside>

        <section className="min-w-0">
          <UsersTable
            title="All users"
            users={users}
            defaultExpandedUserId="user-1"
            variant="full"
          />
        </section>
      </main>
    </div>
  );
};

export default UsersPage;
