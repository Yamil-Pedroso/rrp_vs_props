import { useEffect, useMemo, useRef, useState } from "react";

import {
  createHtmlPortalNode,
  InPortal,
  OutPortal,
} from "react-reverse-portal";

import { properties } from "./properties";
import { PropertyMap } from "./PropertyMap";

export function MapPortalDemo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [resizeSignal, setResizeSignal] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);

  /*
   * Este nodo tiene que ser estable durante toda
   * la vida del componente.
   */
  const mapPortalNode = useMemo(
    () =>
      createHtmlPortalNode({
        containerElement: "div",
        attributes: {
          style: "width:100%;height:100%;",
        },
      }),
    [],
  );

  /*
   * Después de mover el mapa, avisamos a MapLibre
   * para que recalcule sus dimensiones.
   */
  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      setResizeSignal((current) => current + 1);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [isExpanded]);

  const handleDialogClose = () => {
    setIsExpanded(false);
    expandButtonRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/*
       * PropertyMap vive permanentemente aquí.
       * No se vuelve a crear al cambiar de ubicación.
       */}
      <InPortal node={mapPortalNode}>
        <PropertyMap resizeSignal={resizeSignal} />
      </InPortal>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-600">
              Tokyo Living
            </p>

            <h1 className="text-xl font-bold">Encuentra tu próxima casa</h1>
          </div>

          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            {properties.length} propiedades
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[380px_minmax(0,1fr)]">
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold">Propiedades en Tokio</h2>

            <p className="mt-1 text-sm text-slate-500">
              Casas disponibles cerca del centro.
            </p>
          </div>

          <div className="space-y-3">
            {properties.map((property) => (
              <article
                key={property.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-2xl">
                    🏠
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate font-semibold">{property.title}</h3>

                    <p className="mt-1 truncate text-sm text-slate-500">
                      {property.address}
                    </p>

                    <p className="mt-2 text-sm font-bold text-rose-600">
                      ¥{property.price.toLocaleString()} / mes
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="min-w-0">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4">
              <div>
                <h2 className="font-bold">Mapa de propiedades</h2>

                <p className="text-sm text-slate-500">
                  Mueve el mapa y cambia el zoom antes de ampliarlo.
                </p>
              </div>

              <button
                ref={expandButtonRef}
                type="button"
                onClick={() => setIsExpanded(true)}
                className="shrink-0 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Ampliar mapa
              </button>
            </div>

            <div className="h-[520px]">
              {!isExpanded ? (
                <OutPortal node={mapPortalNode} />
              ) : (
                <MapPlaceholder />
              )}
            </div>
          </div>
        </section>
      </div>

      {isExpanded && (
        <dialog
          ref={dialogRef}
          aria-label="Mapa ampliado"
          onClose={handleDialogClose}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              dialogRef.current?.close();
            }
          }}
          className="fixed inset-0 m-0 h-screen max-h-none w-screen max-w-none border-0 bg-white p-0 text-slate-900 open:flex open:flex-col"
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="font-bold">Propiedades en Tokio</h2>

              <p className="text-sm text-slate-500">
                El mapa conserva exactamente su estado anterior.
              </p>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold transition hover:bg-slate-100"
            >
              Cerrar mapa
            </button>
          </div>

          <div className="min-h-0 flex-1">
            <OutPortal node={mapPortalNode} />
          </div>
        </dialog>
      )}
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="flex h-full items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="text-4xl">🗺️</div>

        <p className="mt-3 font-medium text-slate-700">
          El mapa está en la vista ampliada
        </p>
      </div>
    </div>
  );
}
