export function VideoPortalNotes() {
  return (
    <div className="rounded-xl border border-violet-200 bg-violet-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">
        React Reverse Portal con vídeo
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        El vídeo se monta una sola vez dentro de <code>InPortal</code>. Después,
        <code>OutPortal</code> decide en qué parte de la interfaz debe
        mostrarse.
      </p>

      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4">
        <pre className="text-sm text-green-300">{`<InPortal node={videoPortalNode}>
  <VideoPlayer />
</InPortal>

<OutPortal node={videoPortalNode} />`}</pre>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        La parte importante es que <strong>VideoPlayer no se desmonta</strong>.
        Solo cambia de posición, por eso conserva el segundo actual, el volumen,
        el estado de pausa y su estado interno.
      </p>
    </div>
  );
}
