# Documentación del Proyecto

## Descripción del Problema
A día de hoy una gran parte de la población sigue usando los autobuses para desplazarse. A la hora de usar este servicio diariamente encontramos que los usuarios gastan mucho dinero y tiempo en cada viaje. Esto genera que si un usuario decide usar la ruta más rápida para evitar el cansancio normalmente será la más cara y si decide usar la ruta más barata tendrá más horas de viaje.

## Solución Propuesta
Se desea aportar una solución en la cual los clientes puedan obtener la ruta más óptima desde un origen a un destino. Esta ruta más óptima será la que tenga la mejor relación entre horas de viaje y dinero gastado.

## Funcionalidad
La aplicación tendrá la funcionalidad antes descrita, se podrá intoducir un origen y un destino para calcular la ruta más óptima. Además para los usuarios que deseen las rutas más baratas o las rutas más cortas, la plicación también calculará estas rutas.

## Lógica de Negocio
A través de la web de la Junta de Andalucía podremos obtener los datos relativos a las lineas de autobuses en el siguiente [enlace](https://www.juntadeandalucia.es/datosabiertos/portal/dataset/datos-de-la-red-de-consorcios-de-transporte-de-andalucia). Vamos a realizar una búsqueda en profundidad de estos datos para luego procesarlos y así poder aportar la solución antes descrita haciendo uso de un algoritmo Greedy para el cálculo de las rutas.

## Historias de usuario
Para continuar con el proyceto primero hemos creado un tag relativo a las historias de usuario, al que hemos llamado user-stories. Tras esto se han creado varias historias de usuario que resuelven problemas para el cliente y se han asociado a este tag:<br/>
    -[HU001](https://github.com/MarinoFajardo/ControlaTuGasto/issues/2): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más barata entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más barata entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos.<br/>
    -[HU002](https://github.com/MarinoFajardo/ControlaTuGasto/issues/3): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más corta entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más corta entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos.<br/>
    -[HU003](https://github.com/MarinoFajardo/ControlaTuGasto/issues/4): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más óptima entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más óptima entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos. Por la ruta más óptima entendemos que es la que guarda mejor relación entre el precio y la distancia.

## Milestones
Para el desarrollo del proyecto se han creado un total de cuatro milestones:<br/>
    -[M0](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/2):Con este milestone interno se pretende crear la implementación de las clases necesarias para la representación del modelo del problema que compilen correctamente.<br/>
    -[M1](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/4): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más barata entre un lugar de origen y un destino. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla. <br/>
    -[M2](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/5): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más corta entre un lugar de origen y un destino. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla.<br/>
    -[M3](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/6): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más óptima entre un lugar de origen y un destino , siendo esta ruta más óptima la que guarde la mejor relación entre precio y duración. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla.<br/>

En el primer milestone(M0) se pretende realizar una representación del modelo del problema. En este caso se creará la implementación de una clase llamada tramo y otra clase ruta, siendo una ruta una colección de tramos entre un origen y un destino. Una vez obtenida la representación del modelo, en los milestones M1,M2,M3 se creará un grafo de tramos que conecten el lugar de origen con el destino y se aplicará la lógica de negocio mediante un algoritmo greedy para obtener las rutas descritas en las historias de usuario. En el milestone M1 se buscará la ruta más barata, en el milestone M2 se buscará la ruta más corta y en el milestone M3 la ruta más óptima. En cada uno de estos milestones se devolverá al usuario la ruta generada por pantalla.

## Gestor de Dependencias
A la hora de elegir el gestor de dependencias para la aplicación es necesario establecer los criterios que se van a tener en cuenta para esta elección. En este caso se van a buscar gestores de dependencias que nos proporcionen una alta velocidad a la hora de las instalaciones y que estén más estandarizados. Para comprobar esto último se va a hacer uso de la web [Snyk Advisor](https://snyk.io/advisor/), que nos genera una puntuación de cada herramienta en función de su popularidad y su mantenimiento. Teniendo estos criterios en cuenta, los gestores de dependencias que más se ajustan a lo anterior son los siguientes:
- npm: Gestor de dependencias por defecto de NodeJS, tiene una valoración de 100 en [Snyk Advisor](https://snyk.io/advisor/), pero su velocidad a la hora de las instalaciones es mucho menor que la de yarn o pnpm.
- pnpm: Las dependencias se almacenan en un almacén direccionable por contenido, por lo que a la hora de actualizar una dependencia se actualizará únicamente esa dependencia en lugar de clonar todas las
dependencias para únicamente guardar ese cambio. Esto produce un ahorro de espacio en disco y una mejora sustancial del rendimiento. Al igual que npm tiene una valoración de 100 en [Snyk Advisor](https://snyk.io/advisor/) pero a diferencia de npm su rendimiento es muy superior.
- yarn: Es un gestor de paquetes(dependencias) que te permite usar y compartir código para aumentar un poco el rendimiento, además permite instalar paquetes en paralelo a diferencia de NPM que los instala de forma secuencial, por lo que aumenta el rendimiento. Tiene una valoración de 85 en [Snyk Advisor](https://snyk.io/advisor/) pero posee una mejora sustancial de rendimiento con respecto a npm.

Teniendo todo lo anterior en cuenta, el gestor de dependencias más recomendado es pnpm, ya que tiene una puntuación de 100 y su rendimiento es superior al de npm y al de yarn.

## Gestor de Tareas
Para la elección del gestor de tareas se va a tener en cuenta su valoración en [Snyk Advisor](https://snyk.io/advisor/). Tenemos dos opciones a la hora de elegir:
- Optar por usar el gestor de dependencias como gestor de tareas, ya que para lo que vamos a realizar en el proyecto estos gestores de dependencias pueden actuar como gestores de tareas. En la elección del gestor de dependencias se han comentado las puntuaciones de npm, pnpm y de yarn.
- Añadir un gestor de tareas que sea capaz de realizar tareas más específicas. Si optamos por esto, el gestor de tareas específico más valorado es grunt, que cuenta con una valoración de 85.

Lo ideal sería usar un gestor de tareas específico como grunt en la aplicación, aunque tenga una peor valoración, pero para lo que vamos a realizar en la asignatura y a que su instalación nos incluye el archivo Gruntfile.js en el proyecto, se va a optar por usar pnpm como gestor de tareas, ya que lo tenemos instalado al haberlo elegido como gestor de dependencias. 
