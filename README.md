# Presupuesto-app
## He creado una aplicación de presupuestos, en el que escribes el ingreso + o reintegro - que hayas tenido y automaticamente te diga cuando cuanto ingresastes sacastes, tambien obtendras el presupuesto total.
## Detalles del proyecto

### app.component.ts:Creamos variables de ingresos y reintegros con datos vacios, después extraemos los datos de creados en el componeente de servicio de reintegro y ingresos.Luego en el metodo de getIngresoTotal y getReintegroTotal le asignamos el tipo number que es el valor numerico que vamos a usar en este caso, ahora usamos El método forEach() ejecuta la función indicada una vez por cada elemento del array, cogiendo el ingreso y reintegro que es el valor de cada variable que creamos antes con sus datos y haga una operacionde la suma sea igual tanto reintegroToal como reintegro.valor(dato que creamos en el componente  servicio de reintegro y ingreso). Calculamos los porcentajes  dividiendo getIngresoTotal y getReintegroTotal. Por ultimo hacemos un presupuesto total restanto de getIngresoTotal y getReintegroTotal

### app.component.html: En el app-cabecero mostramos el presupuestoTotal que tenemos el ingresoTotal reintegroTotal, porcentajeTotal que son los datos completos que nos van a llegar de los demas comoponents con sus correspondientes operaciones. En app-reintegro [ingresoTotal]="getIngresoTotal()" le pasamos los datos de ingresoTotal mediante un @Input que extrae los componentes del componente padre al componente hijo la operacion de getIngresoTotal se hace en app.componente.ts

### reintegro.servicio.ts: En este componente creamos los datos de reintegro y creamos una funcion de eliminar con indexOf comparar otros valores de reintegro y el método splice usa las instancias de un Array y cambia el contenido de un array eliminando o reemplazando elementos existentes y/o añadiendo nuevos elementos en su lugar.

### reintegro.model.ts: Aqui creamos los datos que vamos a crear en este caso desciption y valor con el tipo de dato de String

### reintegro.component.ts:en este componente creamos otros valores en un array en reintegros.cogemos ingreso total que son valores que tenemos en creados en app.component. cogemos los datos de ReintegroServicio.ts. Unimos estos datos en ngOninit(Método de devolución de llamada que se invoca inmediatamente después de que el detector de cambios predeterminado haya comprobado por primera vez las propiedades vinculadas a datos de la directiva, y antes de que se haya comprobado ninguno de los hijos de vista o contenido. Sólo se invoca una vez al instanciar la directiva.) de reintegros y reintegroServicio que es un parametro para manejar en nuestro componente creamos aqui. Hacemos una función de eliminar reintegro para eliminar los datos que no necesitemos y por ultimo hacemos una función de calcularPorcentaje dividiendo el ingresoTotal entre el reintegro.valor

### reintegro.component.html: Usamos el *ngfor para extraer los datos de reintegro que hemos creado en nuestro componente.ts aqui usamos los pipes como currency que solo puede tomar dos valores monetarios. También creamos el evento click para eliminar un registro 

### formulario.component.ts:Aquí creamos los datos para crear un formulario que escribamos un ingreso o reintegro primero creamos unas variables de tipo String llamado ingresoOperacion, descripcionInput y valorInput en el constructor importamos IngresoServicio y ReintegroServicio en tipoOperacion  le decimos que nos muestre el valor de tipo, y en agregar valor hacemos  una condición if-else que SI tipo es igual a ingresoOperacion que a ingresServicio de ingresos me haga El método push() añade los elementos especificados al final de una matriz y devuelve la nueva longitud de la matriz, y me muestre la descripción y el valor del input que le hemos creado y sino que me muestre la operacion de reintegro.

### formulario.componente.html: (ngSubmit)="f.form.valid && agregarValor()" #f="ngForm" Valida el formulario si se escribe algo correctamente, de lo contrario no mostrará nada. En este componente de html mostramos el formulario de crear un ingreso o reintegro si usamos el valor + sera un ingreso si ponemos - sera un reintegro, si pulsamos el boton se nos pondra en una columna o en otra, Luego puse un ngClass para que cuando pusiera un ingreso me saliera un color verde y si fuera un reintegro que el color fuera rojo.

### cabecero.component.html: En este componente mostramos el total de ingresos y reintegros, además tambien añado el resultado final haciendo una operacion sencilla restando ingresos y reintegros.

### cabecero.component.ts: Aquí Mostramos todos los datos del presupuesto, ingreso, reintegro y porcentaje total 

### ingeso.servicio.ts:/En este componente creamos los datos de ingreso y creamos una funcion de eliminar con indexOf hace comparar otros valores de ingreso y  método splice de las instancias de Array cambia el contenido de un array eliminando o reemplazando elementos existentes y/o añadiendo nuevos elementos en su lugar.

### ingreso.model.ts: Aqui creamos los datos que vamos a crear en este caso desciption y valor con el tipo de dato de String

### Usamos el *ngfor para extraer los datos de ingresos que hemos creado en nuestro componente.ts aqui usamos los Pipes, también usamos el evento click para eliminar un registro que ya no necesitemos.

# Concepto de PIPES en Angular
  # percent: Porcentaje de PIPES
  # currency: valores monetarios y decimales 
## Es un Decorador que marca una clase como canalización y proporciona metadatos de configuración
## OPCIONES:
### name: nombre de la canalizacion que se utiliza en los enlaces de la plantilla. Se utiliza normalmente lowerCamlCase porque el nombre no puede contener guiones.
### pure:Cuando es verdadero, pipe es pura, lo que significa que transform() es un metodo que se invoca solo cuando cambian sus argumentos de entrada. Los pipes son puras por defecto.
### standalone:Los Pipes de angular son marcados como standalone necesitan declararse en un NgModule. Dichas Pipes no dependen de ningún "contexto intermedio" de un NgModule (por ejemplo, proveedores configurados).