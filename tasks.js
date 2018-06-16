const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
    // Step 1: Comprueba setTimeout, setInterval pendientes
    // Step 2: Tareas pendientes del sistema (Escuchar puertos, ...)
    // Step 3: Tareas pendientes de larga ejecución (OPeraciones de FS module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

function runContents() {
    while (shouldContinue()) {
        // 1. NodeJS busca callback pendientes de llamar para timers.

        // 2. NodeJS consulta callbacks relevantes pendientes de operaciones del sistema

        // 3. Pausa la ejecución, hasta que...
            // - una nueva tarea del sistema es completada
            // - una operación es completada
            // - un callback de un timer ha sido completado

        // 4. Comprobar timers pendientes. Busca setImmediate

        // 5. Manejar eventos de 'close'
    }
}

runContents();