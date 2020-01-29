## Aplicacion de comandos NodeJS para Gestionar Tareas
## Descripción:
Aplicación sencilla desarollada en NodeJS que sirve para crear tu lista de tareas personales. La aplicación funciona a través de consola y tiene funcionalidades como:
- crear
- listar
- actualizar
- borrar

## EJECUCIÓN:
Recuerda instalar los paquetes

```
npm install
```

## Crear Tarea
Crea una tarea, ejemplo de ejecución:
```
node app crear -d "Estudiar NodeJS"
```
## Listar Tarea
Lista una tarea de acuerdo al estado en el que se encuentra(true, false), ejemplo de ejecución:
### Tareas Hechas(true):
```
node app listar -c true
```
### Tareas por hacer(false):
```
node app listar -c false
```
## Actualizar Tarea
Cambia el estado a true(tarea completada), ejemplo de ejecución:
```
node app actualizar -d "Estudiar NodeJS" -c
```
## Borrar Tarea
Elimina una tarea, ejemplo de ejecución:
```
node app borrar -d "Estudiar NodeJS" 
```
