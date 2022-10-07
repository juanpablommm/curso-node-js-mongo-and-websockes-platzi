### CURSO DE NODE.JS: BASE DE DATOS MONGODB Y WEBSOCKETS PLATZI

clase 2, trabajando con el body y el query de la peticion. anteriormente para trabajar con el 
body de la peticion en express era necesario instalar un modulo extra llamado **body-parser** y del cual teneia mos que realizar la importacion y posteriormente pasarlo como **middleware** a express en el metodo use. Ahora esto ya no es necesario dado que express ya trae traen los middlewares necesarios para las peticiones.
utlizamos los midllewares **express.json()** para lectura del json que venga en el cuerpo de la
peticion, y utlizamos **express.urlencoded({extended: true})** para lectura del body de la peticion en caso que el content-tyep sea tipo unlencoded