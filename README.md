# BankApp
Prueba de aplicación en ionic
Aplicacion implementada en ionic 4 y angular 7.

La aplicación está estructurada para que cumpla altos estandares empresariales como:
1. Implementacion de HttpClient, la nueva libreria de angular para servicios http.
2. Lazy charging, la arquitectura de la aplicacion está basada en modulos para mejorar el rendimiento.
3. Variables globales de estilos.
4. Diferentes capas de servicios para no replicar codigo (LoadingSpinner, Toast, HttpClient, modelos).
5. Se implementaron los "enviroments" para manejar los diferentes ambientes que pueda tener la aplicación.

Para ejecutar el proyecto en ambiente local se deben seguir los siguentes pasos:
1. Ya con el repositorio descargado en su computador ejecutar en la consola
  el comando 'npm i' (node package manager requerido).
2. Ejecutar el comando 'ionic serve' (ionic v4 requerido previamente en el computador).

La solucion del problema propuesto cosnta de dos pantallas principales:
1. ClientPage para la creacion de clientes nuevos, la pantalla se creó con su respectivo modulo para demostrar la implementacion de
  modulos
2. ClientService, implementa los servicios WEB que se entregaron para solucionar el problema.
3. CreditPage para la solicitud de creditos, tambien con su respectivo modulo.
4. Los colores solicitados se implementaron en la hoja de estilos llamada 'variables.scss'.

-El proyecto se montó en la plantilla de ionic llamada 'Tabs'.
