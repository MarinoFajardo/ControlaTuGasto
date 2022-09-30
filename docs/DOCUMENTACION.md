# Documentación del Proyecto

## Objetivo 0

### Descripción del Problema
A día de hoy una gran parte de la población sigue usando los autobuses para desplazarse. A la hora de usar este servicio diariamente encontramos que los usuarios gastan mucho dinero y tiempo en cada viaje. Esto genera que si un usuario decide usar la ruta más rápida para evitar el cansancio normalmente será la más cara y si decide usar la ruta más barata tendrá más horas de viaje.

### Solución Propuesta
Se desea aportar una solución en la cual los clientes puedan obtener la ruta más óptima desde un origen a un destino. Esta ruta más óptima será la que tenga la mejor relación entre horas de viaje y dinero gastado.

### Funcionalidad
La aplicación tendrá la funcionalidad antes descrita, se podrá intoducir un origen y un destino para calcular la ruta más óptima. Además para los usuarios que deseen las rutas más baratas o las rutas más cortas, la plicación también calculará estas rutas.

### Lógica de Negocio
A través de la web de la Junta de Andalucía podremos obtener los datos relativos a las lineas de autobuses en el siguiente [enlace](https://www.juntadeandalucia.es/datosabiertos/portal/dataset/datos-de-la-red-de-consorcios-de-transporte-de-andalucia). Vamos a realizar una búsqueda en profundidad de estos datos para luego procesarlos y así poder aportar la solución antes descrita haciendo uso de un algoritmo Greedy para el cálculo de las rutas.

## Objetivo 1

### Historias de usuario
Para continuar con el proyceto primero hemos creado un tag relativo a las historias de usuario, al que hemos llamado user-stories. Tras esto se han creado varias historias de usuario que resuelven problemas para el cliente y se han asociado a este tag:
    -[HU001](https://github.com/MarinoFajardo/ControlaTuGasto/issues/2): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobuús más barata entre un origen y un destino. Esta historia de usuario tiene asignada el milestone M2, aunque tambiñen depende de los milestones M0 y M1 ya que sin ellos no se puede llegar a obtener una solución al problema.
    -[HU002](https://github.com/MarinoFajardo/ControlaTuGasto/issues/3): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobuús más corta entre un origen y un destino. Esta historia de usuario tiene asignada el milestone M3.
    -[HU003](https://github.com/MarinoFajardo/ControlaTuGasto/issues/4): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobuús más óptima entre un origen y un destino. Por la ruta más óptima entendemos que es la que guarda mejor relación entre el precio y la distancia.Esta historia de usuario tiene asignada el milestone M4.

### Milestones
Para el desarrollo del proyecto se han creado un total de cinco milestones:
    -[M0](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/2): Con este milestone interno se pretende crear un producto que contenga una serie de ficheros para resolver la parte de la lógica de negocio correspondiente a las paradas y las rutas de los autobuses.
    -[M1](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/3): Con este milestone se pretende crear los ficheros correspondientes que permitan recoger los datos referentes a las rutas de autobuses.
    -[M2](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/4): Con este milestone se pretende crear los ficheros correspondientes para procesar los datos obtenidos sobre las rutas de autobuses y obtener la ruta de autobús más barata.
    -[M3](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/5): Con este milestone se pretende crear los ficheros correspondientes para procesar los datos referentes a las rutas de autobuses y obtener la ruta más corta.
    -[M4](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/6): Con este milestone se pretende crear los ficheros correspondientes para procesar los datos referentes a las rutas de autobuses y obtener la ruta más óptima, siendo esta ruta más óptima la que guarde la mejor relación entre precio y duración.
