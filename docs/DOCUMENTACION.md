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
    - [HU001](https://github.com/MarinoFajardo/ControlaTuGasto/issues/2): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más barata entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más barata entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos.<br/>
    - [HU002](https://github.com/MarinoFajardo/ControlaTuGasto/issues/3): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más corta entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más corta entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos.<br/>
    - [HU003](https://github.com/MarinoFajardo/ControlaTuGasto/issues/4): Con esta historia de usuario queremos resolver el problema que se nos plantea a la hora de encontrar la ruta de autobús más óptima entre un origen y un destino. Esta historia de usuario tendría dos clientes, el primer cliente sería aquel usuario que desea obtener la ruta más óptima entre un origen y un destino, mientras que el segundo cliente sería aquel que desea obtener los datos de la aplicación para obtener las rutas más concurridas, los destinos más populares y poder obtener un beneficio con estos datos. Por la ruta más óptima entendemos que es la que guarda mejor relación entre el precio y la distancia.

## Milestones
Para el desarrollo del proyecto se han creado un total de cuatro milestones:<br/>
    - [M0](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/2):Con este milestone interno se pretende crear la implementación de las clases necesarias para la representación del modelo del problema que compilen correctamente.<br/>
    - [M1](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/4): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más barata entre un lugar de origen y un destino. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla. <br/>
    - [M2](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/5): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más corta entre un lugar de origen y un destino. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla.<br/>
    - [M3](https://github.com/MarinoFajardo/ControlaTuGasto/milestone/6): Con este milestone externo se pretende crear el código necesario para la implementación de la lógica de negocio necesaria para calcular la ruta más óptima entre un lugar de origen y un destino , siendo esta ruta más óptima la que guarde la mejor relación entre precio y duración. Tras el cálculo de esta ruta, se mostrará el resultado por pantalla.<br/>

En el primer milestone(M0) se pretende realizar una representación del modelo del problema. En este caso se creará la implementación de una clase llamada tramo y otra clase ruta, siendo una ruta una colección de tramos entre un origen y un destino. Una vez obtenida la representación del modelo, en los milestones M1,M2,M3 se creará un grafo de tramos que conecten el lugar de origen con el destino y se aplicará la lógica de negocio mediante un algoritmo greedy para obtener las rutas descritas en las historias de usuario. En el milestone M1 se buscará la ruta más barata, en el milestone M2 se buscará la ruta más corta y en el milestone M3 la ruta más óptima. En cada uno de estos milestones se devolverá al usuario la ruta generada por pantalla.



## Runtime de la aplicación
A la hora de establecer las herramientas que vamos a usar en el proyecto, lo primero que debemos hacer es establecer una serie criterios que vamos a seguir a la hora de la elección. Para este proyecto estamos buscando herramientas que nos proporcionen la mayor velocidad y que no nos obliguen a incorporar ficheros innecesarios en el proyecto. Teniendo encuenta estos requisitos y buscando las herramientas con mayor aceptación para el lenguaje de programación elegido, que en mi caso es TypeScript, nos encontramos con los siguientes Runtimes:
- Node.js: Es el runtime más usado, tiene una documentación muy completa y posee frameworks ya consolidados. Podemos obtener más información en su [sitio web](https://nodejs.org/en/).
- Deno: Mucho más seguro que Node.js ya que únicamente dota al programa a ejecutar los permisos que sean necesarios. No tiene un gestor de dependencias como Node tiene a npm ya que instala las dependencias a partir de una URL. Usa módulos ES6 en lugar de los CommonJs que usa Node. Usa promesas en vez de callbacks, lo que hace que el código sea más legible y reutilizable. Además dispone de de librerías o APIS del navegador, como fetch que no está disponible en Node. Deno supone todas estas ventajas con respecto a Node a cambio de un rendimiento un tanto inferior. Esta información ha sido obtenida del siguiente [enlace](https://openwebinars.net/blog/que-es-deno-y-que-lo-hace-diferente/#:~:text=Aunque%20Deno%20sigue%20la%20misma,el%20Event%20Loop%20de%20Deno.) o en su [página web](https://deno.land/).
- Bun: Es un runtime relativamente nuevo que nos proporciona un rendimiento mucho mayor que Node y Deno. Se encuentra actualmente en fase Beta por lo que se pueden encontrar errores en algunas librerías de Node. Actúa además de runtime como gestor de dependencias y gestor de tareas. Podemos obtener más información respecto a Bun en el siguiente [enlace](https://dev.to/builderio/a-first-look-at-bun-is-it-really-3x-faster-than-nodejs-and-deno-45od) o en su [página web](https://bun.sh/). 

Teniendo en cuenta lo descrito anteriormente, el runtime más adecuado para el proyecto sería bun ya que en cuanto a velocidad es el más rápido y al ser un runtime "todo en uno" no nos obligaría a instalar ningún gestor de dependencias ni de tareas, pero debido a una incopatibilidad de mi Sistema Operativo con Bun no puedo usarlo. Tras esto nos encontramos con la elección del Runtime entre NodeJS y Deno, para esta elección he priorizado la velocidad extra que nos aporta en sistemas Linux x64, mientras que Deno nos aporta una mejora de rendimiento en sistemas MAC.



## Gestor de Dependencias
Tras elegir el Runtime que se va a usar en la aplicación, es el turno de tomar la decisión de qué gestor de dependencias se va a usar. A continuación se muestran los más comunes:
- NPM: Gestor de dependencias de Node. Cuenta con un repositorio de más de 100000 paquetes y módulos.
- PNPM: Las dependencias se almacenan en un almacén direccionable por contenido, por lo que a la hora de actualizar una dependencia se actualizará únicamente esa dependencia en lugar de clonar todas las
dependencias para únicamente guardar ese cambio. Esto produce un ahorro de espacio en disco una mejora sustancial del rendimiento.
- Yarn: Es un gestor de paquetes(dependencias) que te permite usar y compartir código para aumentar un poco el rendimiento, además permite instalar paquetes en paralelo a diferencia de NPM que los instala de forma secuencial por lo que aumenta el rendimiento. Actualmente su uso está creciendo bastante.

Teniendo todo lo anterior en cuenta, para la aplicación se va a usar yarn debido a que su instalación no genera deuda técnica y nos da una mejora sustancial de rendimiento y seguridad con respecto a NPM, aunque con respecto a NPMP el rendimiento es similar.

## Gestor de Tareas
Tras elegir el gestor de Dependencias, es hora de elegir el Task Runner para la aplicación, para no aumentar la deuda técnica añadiendo nuevos ficheros a la aplicación, voy a usar yarn como Task Runner ya que para lo que se va a realizar en la asignatura es suficiente. Otras opciones serían:
- Grunt: Está muy extendido y tiene una alta cantidad de recursos. Para usarlo, escribimos las tareas a usar en un archivo Gruntfile.js y las ejecutamos. Podemos obtener más información sobre Grunt en su [página web](https://gruntjs.com/).
- Gulp: Es muy similar a Grunt pero su filosofía es diferente. Gulp se basa en pipes(tuberías de Unix), así que lo que se hace es construir una tubería en vez de ir encadenando tareas, por ello modificar el flujo es sencillo y además el código resultante es muy fácil de leer. Podemos obtener más información sobre Gulp en su [página web](https://gulpjs.com/).

A la hora del uso de yarn para pasar os test, es necesario usar la orden **checks** en lugar **check** debido a que yarn ya cuenta con una función check y sino no es posible pasar los test.
