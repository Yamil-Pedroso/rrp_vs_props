import { VideoPortalDemo } from "../components/video-player/VideoPortalDemo";
import { VideoPortalNotes } from "../components/video-player/VideoPortalNotes";

export default function VideoPortalDemoPage() {
  return (
    <main className="mx-auto  px-6 py-8">
      <div className="grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
        <aside className="xl:sticky xl:top-6 self-start">
          <VideoPortalNotes />
        </aside>

        <section className="min-w-0">
          <VideoPortalDemo />
        </section>
      </div>
    </main>
  );
}
