# PIPES
## Es un Decorador que marca una clase como canalización y proporciona metadatos de configuración
## OPCIONES:
### name: nombre de la canalizacion que se utiliza en los enlaces de la plantilla. Se utiliza normalmente lowerCamlCase porque el nombre no puede contener guiones.
### pure:Cuando es verdadero, pipe es pura, lo que significa que transform() es un metodo que se invoca solo cuando cambian sus argumentos de entrada. Los pipes son puras por defecto.
### standalone:Los Pipes de angular son marcados como standalone necesitan declararse en un NgModule. Dichas Pipes no dependen de ningún "contexto intermedio" de un NgModule (por ejemplo, proveedores configurados).