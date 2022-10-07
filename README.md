### CURSO DE NODE.JS: BASE DE DATOS MONGODB Y WEBSOCKETS PLATZI

clase 1. instalacion de [express](https://www.npmjs.com/package/express) para trabajar con servidores.
este es el paquete mas utilizado para trabajar con srvidores de una manera mas sencilla y rapida, en comparacion con la creacion a apartir del modulo http;
se crea un constrollador basico, para escuchar bajo los verbos, get, post, update, delete, respondiendo con un simple mensaje de igual manera creamos un middleware para usarlo antes de cada peticion.

**middleware =>** un middleware es una funcion o pieza de codigo que se ejecutara 
despues de que el servidor resiba una llamada desde un cliente y antes de 
la accion del controlador, independitemente de cual sea el verbo 
poir el que estamos escuchando. lo que significa que antes cuando se realiza un
reques, se ejecutara el middleware antes de que el controllador mande el response, este se susle utlizar con diferentes propositos como resgistar las solicitudes o verificarlas para algun requisito especifico, como puede ser verificar si viene una cabecera en esta