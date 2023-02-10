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

## Gestor de Dependencias
A la hora de elegir el gestor de dependencias para la aplicación es necesario establecer los criterios que se van a tener en cuenta para esta elección. En este caso se van a buscar gestores de dependencias que nos proporcionen una alta velocidad a la hora de las instalaciones y que tengan una mayor puntuación en Snyk Advisor. Esta web dota con una puntuación a cada herramienta en función a su popularidad, su mantenimiento y su seguridad, dándonos la posibilidad de no crear deuda técnica al evitar usar herramientas que estén desactualizadas. Teniendo estos criterios en cuenta, los gestores de dependencias que más se ajustan a lo anterior son los siguientes:
- npm: Gestor de dependencias por defecto de NodeJS, tiene una valoración de 100 en [Snyk Advisor](https://snyk.io/advisor/), pero su velocidad a la hora de las instalaciones es mucho menor que la de yarn o pnpm.
- pnpm: Las dependencias se almacenan en un almacén direccionable por contenido, por lo que a la hora de actualizar una dependencia se actualizará únicamente esa dependencia en lugar de clonar todas las
dependencias para únicamente guardar ese cambio. Esto produce un ahorro de espacio en disco y una mejora sustancial del rendimiento. Al igual que npm tiene una valoración de 100 en [Snyk Advisor](https://snyk.io/advisor/) pero a diferencia de npm su rendimiento es muy superior.
- yarn: Es un gestor de paquetes(dependencias) que te permite usar y compartir código para aumentar un poco el rendimiento, además permite instalar paquetes en paralelo a diferencia de NPM que los instala de forma secuencial, por lo que aumenta el rendimiento. Tiene una valoración de 85 en [Snyk Advisor](https://snyk.io/advisor/) pero posee una mejora sustancial de rendimiento con respecto a npm.

Teniendo todo lo anterior en cuenta, el gestor de dependencias más recomendado es pnpm, ya que tiene una puntuación de 100 y su rendimiento es superior al de npm y al de yarn, además de contar con actualizaciones más frecuentes(la última fue hace 4 días) que este último, debido a que la última release de yarn fue hace 6 meses.

## Gestor de Tareas
Para la elección del gestor de tareas se va a tener en cuenta la puntuación de la herramienta en [Snyk Advisor](https://snyk.io/advisor/) para no generar deuda técnica con herramientas desactualizadas. A la hora de realizar la elección tenemos dos opciones:
- Optar por usar el gestor de dependencias como gestor de tareas, ya que para lo que vamos a realizar en el proyecto estos gestores de dependencias pueden actuar como gestores de tareas. En la elección del gestor de dependencias se han comentado las puntuaciones de npm, pnpm y de yarn.
- Añadir un gestor de tareas que sea capaz de realizar tareas más específicas. Si optamos por esto, el gestor de tareas específico más valorado es grunt, que cuenta con una valoración de 85, aunque su última actualización se realizó hace 7 meses, por lo que podría estar desactualizado. Su uso nos incorpora el archivo Gruntfile en la aplicación.

Teniendo esto en cuenta, he decidido usar pnpm como gestor de tareas, ya que para lo que se va a realizar en el proyecto es suficiente y no nos genera nuevos ficheros en la aplicación, además de que cuenta con una mejor valoración y actualizaciones frecuentes. 

## Librería de Aserciones
A la hora de elegir una biblioteca de aserciones vamos a tener en cuenta lo siguiente:
- Uso de test BDD.
- Usar librerías actualizadas para evitar generar deuda técnica.
- Librerías que puedan usarse con TypeScript.

Con los criterios descritos anteriormente, las librerías que más se ajustan son:
- **Chai**: Podemos encontrar su documentación en el siguiente [enlace](https://www.chaijs.com/). Librería de aserciones más usada, cuenta con una puntuación de 100 en [Snyk Advisor](https://snyk.io/advisor/npm-package/chai) y su última actualización fue hace 2 meses. Funciona sin problema con TypeScript y usa tests BDD.
- **ShouldJS**: Podemos encontrar su documentación en el siguiente [enlace](https://shouldjs.github.io/). Actualmente, cuenta con una puntuación de 58 en [Snyk Advisor](https://snyk.io/advisor/npm-package/should) y su última actualización fue hace 4 años, por lo que no está muy actualizado. No tiene problemas de compatibilidad con TypeScript y usa tests BDD.
- **ExpectJS**: Podemos encontrar su documentación en el siguiente [enlace](https://github.com/Automattic/expect.js/). Tiene una puntuación de 52 en [Snyk Advisor](https://snyk.io/advisor/npm-package/expect.js), su última actualización fue hace 9 años y su uso ha disminuido bastante. Puede ser usado con TypeScript y usa tests BDD.
- **Unexpected**: Podemos encontrar su documentación en el siguiente [enlace](https://unexpected.js.org/). Actualmente, cuenta con una puntuación de 81 en [Snyk Advisor](https://snyk.io/advisor/npm-package/unexpected) y su última actualización fue hace 1 mes, por lo que cuenta con actualizaciones frecuentes. No tiene problemas de compatibilidad con TypeScript y usa test BDD.
- **Earl**: Podemos encontrar su documentación en el siguiente [enlace](https://earljs.dev/). Tiene una puntuación de 59 en [Snyk Advisor](https://snyk.io/advisor/npm-package/earljs) y su última actualización fue hace 10 meses. Es una biblioteca específica de TypeScript y usa test BDD.
- **Typed-Assert**: Podemos encontrar su documentación en el siguiente [enlace](https://github.com/elierotenberg/typed-assert). Tiene una puntuación de 71 en  [Snyk Advisor](https://snyk.io/advisor/npm-package/typed-assert) y su última actualización fue hace 11 meses. Es una biblioteca de aserciones específica de TypeScript y usa test BDD.

Teniendo esto en cuenta, la mejor opción es **Chai**, ya que cumple todos los criterios, está mucho más actualizada y tiene mejor puntuación que las bibliotecas específicas de TypeScript.

## Test Runner
A la hora de elegir el test runner para la aplicación se van a tener en cuenta una serie de criterios:
- Instalar el menor número de herramientas.
- Herramientas que usen tests en paralelo para ejecutarlos a mayor velocidad.
- Usar herramientas actualizadas para evitar generar deuda técnica y que cuenten con una buena comunidad.
- Usar herramientas compatibles con TypeScript.

Las herramientas que cumplen con los criterios establecidos son las siguientes:
- **Jasmine**: Podemos encontrar su documentación en el siguiente [enlace](https://jasmine.github.io/index.html). No ejecuta los test en paralelo, aunque contiene su propia biblioteca de aserciones. Posee una puntuación de 92 en [Snyk Advisor](https://snyk.io/advisor/npm-package/jasmine) y su última actualización fue hace 2 meses. Para poder usar Jasmine con TypeScript sería necesario incorporar herramientas para complementarlo.
- **Jest**: Podemos encontrar su documentación en el siguiente [enlace](https://jestjs.io/). Nos permite ejecutar test en paralelo y cuenta con su propia biblioteca de aserciones, por lo que no será necesario instalar ninguna. Su última actualización se produjo hace 2 meses y cuenta con una puntuación de 89 en [Snyk Advisor](https://snyk.io/advisor/npm-package/jest). Para poder usar Jest con TypeScript es necesario instalar ts-jest, lo que nos llevará a incorporar un fichero de configuración.
- **Mocha**: Podemos encontrar su documentación en el siguiente [enlace](https://mochajs.org/). No trae incorporada biblioteca de aserciones por lo que sería necesario incorporarla más tarde. Su última actualización fue hace 1 mes y cuenta con una puntuación de 98 en [Snyk Advisor](https://snyk.io/advisor/npm-package/mocha). A partir de su versión 8.0 ejecuta los test en paralelo. Para el uso de TypeScript no habría que incluir herramientas adicionales ni ficheros de configuración.

Teniendo en cuenta lo anterior, voy a optar por usar en el proyecto **Mocha**, ya que en conjunto con Chai es el que más se adapta a los criterios y es el más sencillo de los tres a la hora de usar TypeScript.

## Elección de la imagen Base
Para la elección de la imagen base vamos a tener en cuenta los siguientes criterios:
- El tamaño de la imagen es importante, por lo que debemos elegir una imagen que no ocupe demasiado espacio.
- La imagen debe contar con actualizaciones freuentes para no generar deuda técnica.
- La imagen elegida debe contener las herramientas que serán necesarias para el proyecto(Node,pnpm).

Teniendo en cuenta estos requisitos tenemos las siguientes opciones:
### Docker OS images:
- Estas imágenes cuentan únicamente con el Sistema Operativo, por lo que habría que instalar todas las herramientas:
   - **Ubuntu**: Imagen oficial de Ubuntu, podemos encontrar la documentación en el siguiente [enlace](https://hub.docker.com/_/ubuntu). Su última actualización fue hace 2 meses y tiene un peso comprimido de 29.02 MB. No trae instalada ninguna herramienta, por lo que sería necesario instalarlas dentro de la imagen.
  - **Alpine**: Imagen oficial de Alpine, podemos encontrar su documentación en el siguiente [enlace](https://hub.docker.com/_/alpine). Su última actualización fue hace 17 días y tiene un peso comprimido de 3.25 MB. Al igual que la imagen oficial de Ubuntu, no trae instalada ninguna herramienta.
 ### Imagenes Oficiales de Node:
- Al usar Node dentro de nuestra aplicación, podemos optar por usar sus [imágenes oficiales](https://hub.docker.com/_/node):
  - **node:latest**: Última versión de node, por lo que es inestable. Tiene un peso comprimido de 353.67 MB, usa una distribución Debian estándar y su última actualización fue hace 16 horas.
  - **node:lts**: Última versión estable de Node(18.13.0). Tiene un peso comprimido de 352.69 MB, usa una distribución estándar de Debian y su última actualización fue hace 15 días.
  - **node:lts-slim**: Imagen node:lts que contiene únicamente los paquetes necesarios para instalar node. Tiene un peso comprimido de 75.97 MB y su última actualización fue hace 15 días.
  - **node:lts-alpine**: Imagen basada en una distribución Alpine. Tiene un peso comprimido de 50.21 MB y su última actualización fue hace 17 días. 
Todas estas imágenes de node cuentan con el inconveniente de traer instalado yarn(que no usamos en la aplicación). Esta instalación nos supone de un peso en la imagen de 5.33 MB según [Snyk Advisor](https://snyk.io/advisor/npm-package/yarn) que generaría deuda técnica, aunque no tenga un peso demasiado significativo. Además, estas imágenes no traen instalado pnpm, por lo que habría que instalarlo también.

### Imágenes no oficiales de Node:
  - **bitnami/node**: Podemos encontrar su documentación en el siguiente [enlace](https://github.com/bitnami/containers/tree/main/bitnami/node). Su última actualización fue hace un día, por lo que tiene un buen mantenimiento. Al igual que las imágenes oficiales de Node, trae instaladas funcionalidades extra que no son necesarias para el proyecto(yarn por ejemplo). El problema de esta imagen lo encontramos al mirar su peso, ya que tiene un peso comprimido de 240 MB.
  - **cimg/node**: Podemos encontrar su documentación en el siguiente [enlace](https://hub.docker.com/r/cimg/node). Su última actualización fue hace 3 dias, por lo que la imagen cuenta con un buen mantenimiento. Trae instaladas funcionalidades extra que no se usan en la aplicación(yarn). AL igual que la imagen anterior, su principal problema reside en su tamaño, que es de 610 MB comprimidos.

Comparando todas las alternativas, es mejor opción, aunque tengan un tamaño base mayor, utilizar las imágenes oficiales de Node, ya que nos traen instaladas las herramientas necesarias para usar Node y no habría que instalarlas. Dentro de estas imágenes, las mejores opciones son **node:lts-slim** y **node:lts-alpine**. La elección de cualquiera de estas dos imágenes cumpliría con todos los criterios, ya que son las que tienen un peso menor, están actualizadas y cuentas con las herramientas instaladas para utilizar node, por lo que para el proyecto voy a optar por usar **node:lts-slim**, puesto que no tengo experiencia con distribuciones de Alpine.
