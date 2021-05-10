# MyTodoList

  La aplicación MyTodoList consiste en una ToDo-List básica que cuenta con una lista de tareas que pueden estar en tres estados: Pending, In process y Done. A cada tarea se le debe asignar una categoría.
  Las categorías se pueden crear, borrar y editar desde la pestaña de “Categories”. Cuidado, si borras una categoría que pertenezca a una tarea, la categoría de dicha tarea se quedará en blanco.

# Para acceder a la aplicación desde la web:

	  [MyTodoList](https://task-list-87400.web.app/)
    [MyTodoList](https://task-list-87400.firebaseapp.com/)

# Base de datos

  Se utiliza como base de datos Firestore, por lo que las tareas y categorías se guardan en colecciones.

# Ejecutar en local

  Para ejecutar la aplicación en local utilizar las ordenes (desde la carpeta de la aplicación):
      `ng serve`  
      `ng serve --open`
  La segunda opción abre una pestaña en el navegador con la aplicación con dirección localhost:4200, en caso de usar la primera orden introduce en el navegador `http://localhost:4200/` y podrás ver la aplicación ejecutándose en tiempo real.

# Hosting

  Para hostear nuevos cambios simplemente ejecuta las siguientes ordenes
      `ng build`
      `firebase deploy`
  *La primera orden crea una versión optimizada de la aplicación.*
  *Recuerda que para ejecutar firebase deploy debes tener instalado `firebase-tools`. Además, si es la primera vez que lo ejecutas antes debes iniciar sesión y ejecutar la orden `firebase init`. Siguiendo el siguiente enlace: [Deploy angular firebase](https://codigofacilito.com/articulos/deploy-angular-firebase) tienes explicado con detalle como hostear una aplicación de angular en firebase por primera vez.*

# Directorios:
Dentro del directorio `src/app` se encuentran todos los componentes creados para desarrollar la aplicación. De forma más específica:
  - **app-routing.module.ts** es en donde se especifican las rutas de los componentes
  - **app.component.html** aquí se carga la tool-bar y las rutas definidas anteriormente con <router-oulet></router-oulet>
  - **all-task historical-task inprocess-tasks pending-tasks** contienen tablas que se cargan con las tareas dependiendo de su estado, el estado cargado es el que corresponde con los nombres de los componentes en sí. Las tablas se crean con angular material “Table” se ordenan de forma automática.
  - **list-task* desde este componente se cargan los componentes mencionados justo arriba y se hace uso del angular material “Tabs” para mostrarlos de forma ordenada.
  - **categories** este componente es el que se utiliza para crear, editar y borrar categorías.
  - **create-task**  es el componente con la lógica para crear nuevas tareas.
  - **form** proporciona la vista al formulario para editar las tareas existentes. Se utiliza angular material “Form-field”, “Radio button” y “Select”.
  - **materials** este componente se utiliza para cargar los imports necesarios para añadir los angular materials utilizados en el proyecto.
  - **toolbar** como su nombre lo indica este componente añade la barra de navegación a la web.
  - **services** dentro de este componente se definen los métodos que permitirán acceder y modificar las colecciones que se encuentran creadas en la base de datos de firebase.
Dentro del directorio `src/enviroment.ts` se rellena toda la información necesaria para conectar el proyecto con la base de datos.
Dentro del directorio `src/models` se declaran dos interfaces una para las tareas y otra para las categorías. Dichas interfaces sirven de ayuda para gestionar el manejo de los datos entre la aplicación y la base de datos en firebase.


Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.
Se utilizo como referencia el siguiente video tutorial [Angular firebase CRUD y Angular material](https://www.youtube.com/watch?v=JEnLqlsEAbw&ab_channel=DominiCode).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
