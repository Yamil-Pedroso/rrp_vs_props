export function UsersTableNotes() {
  return (
    <div className="mb-6 rounded-xl border border-sky-200 bg-sky-50 p-5">
      <h3 className="text-base font-semibold text-slate-900">
        ♻️ Reutilización del componente
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-700">
        La misma <strong>UsersTable</strong> se reutiliza dos veces en la
        página. La única diferencia es la configuración mediante props (
        <code>variant</code> y <code>defaultExpandedUserId</code>), mientras que
        toda la lógica de abrir y cerrar filas se comparte.
      </p>

      <div className="mt-4 rounded-lg bg-slate-900 p-4">
        <pre className="text-sm text-green-300">{`setExpandedUserId(current =>
  current === userId
    ? null
    : userId
);`}</pre>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-700">
        Esta condición implementa la lógica de <strong>toggle</strong>:
        <br />• Si el usuario hace clic sobre la fila que ya está abierta, se
        cierra (<code>null</code>).
        <br />• Si hace clic sobre otra fila, se reemplaza el id actual por el
        nuevo, manteniendo <strong>una única fila expandida por tabla</strong>.
      </p>
    </div>
  );
}
