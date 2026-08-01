import { useEffect, useRef, useState, type RefObject } from "react";

import Map, {
  Marker,
  NavigationControl,
  Popup,
  type MapRef,
} from "react-map-gl/maplibre";

import "maplibre-gl/dist/maplibre-gl.css";

import { properties, type Property } from "./properties";

type PropertyMapProps = {
  resizeSignal: number;
};

export function PropertyMap({ resizeSignal }: PropertyMapProps) {
  const mapRef = useRef<MapRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );

  const [mountCount] = useState(() => {
    console.log("🗺️ PropertyMap se ha montado");
    return 1;
  });

  useEffect(() => {
    return () => {
      console.log("❌ PropertyMap se ha desmontado");
    };
  }, []);

  /*
   * MapLibre necesita recalcular el canvas cuando cambia
   * el tamaño de su contenedor.
   */
  useMapResizeObserver(containerRef, mapRef);

  /*
   * El resizeSignal cambia después de mover el portal.
   * Esperamos al siguiente frame para que el nuevo
   * contenedor ya tenga sus dimensiones finales.
   */
  useEffect(() => {
    const animationFrameId = window.requestAnimationFrame(() => {
      mapRef.current?.getMap().resize();
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [resizeSignal]);

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-0 w-full overflow-hidden bg-slate-200"
    >
      <Map
        ref={mapRef}
        initialViewState={{
          longitude: 139.7104,
          latitude: 35.6812,
          zoom: 11.4,
          pitch: 35,
          bearing: -8,
        }}
        mapStyle="https://demotiles.maplibre.org/style.json"
        style={{
          width: "100%",
          height: "100%",
        }}
        attributionControl={false}
      >
        <NavigationControl position="top-right" />

        {properties.map((property) => {
          const isSelected = selectedProperty?.id === property.id;

          return (
            <Marker
              key={property.id}
              longitude={property.longitude}
              latitude={property.latitude}
              anchor="bottom"
            >
              <button
                type="button"
                aria-label={`Seleccionar ${property.title}`}
                onClick={(event) => {
                  event.stopPropagation();
                  setSelectedProperty(property);
                }}
                className={[
                  "flex h-10 w-10 items-center justify-center",
                  "rounded-full border-4 border-white shadow-lg",
                  "transition duration-200",
                  isSelected
                    ? "scale-110 bg-rose-600"
                    : "bg-slate-900 hover:scale-110",
                ].join(" ")}
              >
                <span aria-hidden="true" className="text-lg text-white">
                  ⌂
                </span>
              </button>
            </Marker>
          );
        })}

        {selectedProperty && (
          <Popup
            longitude={selectedProperty.longitude}
            latitude={selectedProperty.latitude}
            anchor="top"
            offset={14}
            closeOnClick={false}
            onClose={() => setSelectedProperty(null)}
          >
            <div className="min-w-48 p-1 text-slate-900">
              <p className="font-semibold">{selectedProperty.title}</p>

              <p className="mt-1 text-xs text-slate-500">
                {selectedProperty.address}
              </p>

              <p className="mt-2 font-medium">
                ¥{selectedProperty.price.toLocaleString()} / mes
              </p>
            </div>
          </Popup>
        )}
      </Map>

      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-700 shadow">
        Montajes del mapa: {mountCount}
      </div>
    </div>
  );
}

function useMapResizeObserver(
  containerRef: RefObject<HTMLDivElement | null>,
  mapRef: RefObject<MapRef | null>,
) {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      mapRef.current?.getMap().resize();
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, mapRef]);
}
