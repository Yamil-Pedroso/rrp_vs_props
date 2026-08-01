import { MapPortalDemo } from "../components/map/MapPortalDemo";
import { MapPortalNotes } from "../components/map/MapPortalNotes";

const MapDemoPage = () => {
  return (
    <main className="mx-auto  px-6 py-8">
      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <aside className="xl:sticky xl:top-6 self-start">
          <MapPortalNotes />
        </aside>
        <section className="min-w-0">
          <MapPortalDemo />
        </section>
      </div>
    </main>
  );
};

export default MapDemoPage;
