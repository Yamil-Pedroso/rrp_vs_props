export function MapPortalNotes() {
  return (
    <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">
        React Reverse Portal con mapa
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        El mapa también se crea una sola vez. Al pasar de la tarjeta pequeña a
        la vista ampliada, se mantiene la misma instancia de MapLibre.
      </p>

      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4">
        <pre className="text-sm text-green-300">{`const mapPortalNode = useMemo(
  () => createHtmlPortalNode(),
  [],
);

<InPortal node={mapPortalNode}>
  <PropertyMap />
</InPortal>`}</pre>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        <code>useMemo</code> mantiene estable el portal node. Si se creara uno
        nuevo en cada render, el mapa podría perder la referencia anterior.
      </p>

      <div className="mt-4 overflow-x-auto rounded-lg bg-slate-900 p-4">
        <pre className="text-sm text-green-300">{`mapRef.current?.getMap().resize();`}</pre>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        Aunque el mapa no se vuelve a montar, sí debe recalcular el tamaño de su
        canvas. Por eso se ejecuta <code>resize()</code> después de moverlo. Así
        conserva el zoom, el centro, el popup y los marcadores.
      </p>
    </div>
  );
}
