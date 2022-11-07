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

## Runtime de la aplicación
Tras una búsqueda para conocer los runtimes mas usados para typeScript podemos decir que los más usados son los siguientes:
- Node.js: Es el runtime más usado, tiene una documentación muy completa y posee frameworks ya consolidados. Podemos obtener más información en su [sitio web](https://nodejs.org/en/).
- Deno: Mucho más seguro que Node.js ya que únicamente dota al programa a ejecutar los permisos que sean necesarios. No tiene un gestor de dependencias como Node tiene a npm ya que instala las dependencias a partir de una URL. Usa módulos ES6 en lugar de los CommonJs que usa Node. Usa promesas en vez de callbacks, lo que hace que el código sea más legible y reutilizable. Además dispone de de librerías o APIS del navegador, como fetch que no está disponible en Node. Deno supone todas estas ventajas con respecto a Node a cambio de un rendimiento un tanto inferior. Esta información ha sido obtenida del siguiente [enlace](https://openwebinars.net/blog/que-es-deno-y-que-lo-hace-diferente/#:~:text=Aunque%20Deno%20sigue%20la%20misma,el%20Event%20Loop%20de%20Deno.) o en su [página web](https://deno.land/).
- Bun: Es un runtime relativamente nuevo que nos proporciona un rendimiento mucho mayor que Node y Deno. Se encuentra actualmente en fase Beta por lo que se pueden encontrar errores en algunas librerías de Node. Actúa además de runtime como gestor de dependencias y gestor de tareas. Podemos obtener más información respecto a Bun en el siguiente [enlace](https://dev.to/builderio/a-first-look-at-bun-is-it-really-3x-faster-than-nodejs-and-deno-45od) o en su [página web](https://bun.sh/).
- Otras opciones menos conocidas son: Napa.JS , Hernes , JerryScript o QuickJS, pero no son muy usadas. 

En principio tenia pensado usar bun debido a su alta potencia y a que me parecía interesante ya que es un runtime "todo en uno", pero por errores de compatibilidad con mi versión de Sistema Operativo(cosas de estar en Beta) voy a usar Node.
La lista de los runtimes descritos en este issue ha sido obtenida del siguiente [enlace](https://bestofjs.org/projects?tags=runtime). Como podemos observar, las tres primeras opciones nombradas tienen un uso mucho más alto que el resto, por eso no se ha hecho demasiado hincapié en ellas.

## Gestor de Dependencias
Como en #17 hemos decidido usar como Rutime del proyecto a Node, vamos a usar su gestor de dependencias, que en este caso es NPM:
- NPM: Gestor de dependencias de Node. Cuenta con un repositorio de más de 100000 paquetes y módulos.
- Bower: Este gestor de paquetes(dependencias) corre sobre NPM. NPM es mucho más completo mientras que Bower apuesta por la reducción en el tamaño del archivo y los tiempos de carga para las dependencias del frontend. Se puede decir que está obsoleto ya que NPM puede hacer casi todo lo que hace Bower.
- RequireJS: Es un cojunto de herramientas de JS que se puede utilizar para cargar módulos de manera sencilla incluyendo módulos de Node. Puede detectar automáticamente las dependencias necesarias en base a lo que estás utilizando.
- Jam: Gestor de paquetes(dependencias) que funciona en el navegador  y de gestión automática similar a RequireJS. Todas sus dependencias son introducidas en un único archivo que te permite agregar y quitar elementos de forma sencilla.
- Yarn: Es un gestor de paquetes(dependencias) que te permite usar y compartir código para aumentar un poco el rendimiento. Actualmente su uso está aumentando basntante con respecto a NPM.

He usado información perteneciente a las siguientes páginas:
- [¿Qué es Yarn?](https://www.itdo.com/blog/javascript-que-es-yarn/#:~:text=Qu%C3%A9%20es%20Yarn%3F-,Yarn%20es%20un%20gestor%20de%20paquetes%20para%20tu%20c%C3%B3digo.,compatible%20con%20el%20registro%20npm.)
- [Gestores de dependencias para el desarrollo web](https://programacion.net/articulo/5_gestores_de_dependencias_para_el_desarrollo_web_1421)

## Gestor de Tareas
Al igual que en #18, como decidimos usar Node como Runtime de la aplicación, vamos a usar el npm como task Runner, ya que aunque es un gestor de dependencias también tiene la capacidad de actuar como gestor de tareas y como ya lo uso como gestor de dependencias no hay que instalar nada más. NPM tiene sus limitaciones pero para lo que vamos a realizar en la asignatura creo que es suficiente.
- Grunt: Está muy extendido y tiene una alta cantidad de recursos. Para usarlo, escribimos las tareas a usar en un archivo Gruntfile.js y las ejecutamos. Podemos obtener más información sobre Grunt en su [página web](https://gruntjs.com/).
- Gulp: Es muy similar a Grunt pero su filosofía es diferente. Gulp se basa en pipes(tuberías de Unix), así que lo que se hace es construir una tubería en vez de ir encadenando tareas, por ello modificar el flujo es sencillo y además el código resultante es muy fácil de leer. Podemos obtener más información sobre Gulp en su [página web](https://gulpjs.com/).

Esta información ha sido obtenida del siguiente [enlace](https://jesuslc.com/2016/10/04/npm-vs-grunt-vs-gulp-vs-webpack-vs-vaya-lio-de-frontend/)

## Checkeo de Sintaxis
Para hacer los checks del código, voy a usar Eslint, ya que es el validador de sintaxis más usado de typeScript. Para configurarlo correctamente he hecho uso del siguiete [enlace](https://mugan86.medium.com/eslint-en-typescript-paso-a-paso-ab2255321fd).
