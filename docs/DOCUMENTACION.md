# Documentación del Proyecto

## Descripción del Problema
A día de hoy una gran parte de la población sigue usando los autobuses para desplazarse. A la hora de usar este servicio diariamente encontramos que los usuarios gastan mucho dinero y tiempo en cada viaje. Esto genera que si un usuario decide usar la ruta más rápida para evitar el cansancio normalmente será la más cara y si decide usar la ruta más barata tendrá más horas de viaje.

## Solución Propuesta
Se desea aportar una solución en la cual los clientes puedan obtener la ruta más óptima desde un origen a un destino. Esta ruta más óptima será la que tenga la mejor relación entre horas de viaje y dinero gastado.

## Funcionalidad
La aplicación tendrá la funcionalidad antes descrita, se podrá intoducir un origen y un destino para calcular la ruta más óptima. Además para los usuarios que deseen las rutas más baratas o las rutas más cortas, la plicación también calculará estas rutas.

## Lógica de Negocio
A través de la web de la Junta de Andalucía podremos obtener los datos relativos a las lineas de autobuses en el siguiente [enlace](https://www.juntadeandalucia.es/datosabiertos/portal/dataset/datos-de-la-red-de-consorcios-de-transporte-de-andalucia). Vamos a realizar una búsqueda en profundidad de estos datos para luego procesarlos y así poder aportar la solución antes descrita haciendo uso de un algoritmo Greedy para el cálculo de las rutas.

