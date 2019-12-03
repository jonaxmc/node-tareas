## Aplicacion de comandos NodeJS

Recuerda instalar los paquetes

```
npm install
```

### EJECUCIÓN:
## -crear
Crea una tarea, ejemplo de ejecución:
```
node app crear -d Tarea 1
```
## -listar
Lista una tarea de acuerdo al estado en el que se encuentra, ejemplo de ejecución:
```
node app listar -c true
```
```
node app listar -c false
```
## -actualizar
Cambia el estado a true(tarea completada), ejemplo de ejecución:
```
node app actualizar -d Tarea 1 -c
```
## -borrar
Elimina una tarea, ejemplo de ejecución:
```
node app borrar -d Tarea 1 
```
