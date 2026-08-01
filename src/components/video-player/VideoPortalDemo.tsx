import { useMemo, useState } from "react";
import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from "react-reverse-portal";

import { VideoPlayer } from "./VideoPlayer";

export function VideoPortalDemo() {
  const [isFloating, setIsFloating] = useState(false);

  const videoPortalNode = useMemo(() => createHtmlPortalNode(), []);

  return (
    <section className="min-h-screen bg-slate-100 p-6">
      {/*
        El vídeo se crea aquí una sola vez.

        InPortal mantiene el componente montado,
        aunque visualmente aparezca donde esté OutPortal.
      */}
      <InPortal node={videoPortalNode}>
        <VideoPlayer />
      </InPortal>

      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              React Reverse Portal
            </h1>

            <p className="mt-1 text-slate-600">
              Reproduce el vídeo y cambia su posición.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsFloating((currentValue) => !currentValue)}
            className="rounded-lg bg-slate-900 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
          >
            {isFloating ? "Mover al contenido" : "Mover a miniatura"}
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
              Vídeo principal
            </h2>

            {!isFloating ? (
              <OutPortal node={videoPortalNode} />
            ) : (
              <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50">
                <p className="text-center text-slate-500">
                  El vídeo está ahora en modo flotante.
                </p>
              </div>
            )}

            <div className="mt-6 space-y-3 text-slate-700">
              <p>Empieza a reproducir el vídeo y espera unos segundos.</p>

              <p>
                Después pulsa el botón. El vídeo cambiará de posición sin
                comenzar desde cero.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">
              Información
            </h2>

            <p className="text-sm leading-6 text-slate-600">
              Abre la consola del navegador. Solo deberías ver el mensaje
              “VideoPlayer montado” una vez.
            </p>
          </aside>
        </div>
      </div>

      {isFloating && (
        <div className="fixed bottom-5 right-5 z-50 w-[min(420px,calc(100vw-2.5rem))] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">
              Reproductor flotante
            </p>

            <button
              type="button"
              onClick={() => setIsFloating(false)}
              className="rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
            >
              Cerrar
            </button>
          </div>

          <OutPortal node={videoPortalNode} />
        </div>
      )}
    </section>
  );
}
