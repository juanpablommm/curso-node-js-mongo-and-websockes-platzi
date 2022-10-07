/**un middleware es una funcion o pieza de codigo que se ejecutara 
 * despues de que el servidor resiba una llamada desde un cliente y antes de 
 * la accion del controlador, independitemente de cual sea el verbo 
 * por el que estamos escuchando. lo que significa que antes cuando se realiza un
 * request, se ejecutara el middleware antes de que el controllador mande el response.
 * este se suele utlizar con diferentes propositos como resgistar las solicitudes o verificarlas para algun requisito especifico, como puede ser verificar si viene una cabecera en esta
 * 
 */

/**un middleware tiene tres parametros, los cuales son el request, response y un tercero
 * adicional que es next, el cual seria nada mas ni nada menos que un callback
 * que tendremos que llamar al final de nuestra logica que definamos en el middleware,
 * para que al final la llamada pueda reacionar a la ruta direccionada.
 * 
 * en nustro middleware solamente estamos verificando que nuestra peticion independientemente
 * de cual sea el verbo para el end-point lleve la cabecera task, de ser asi se jecutara 
 * el log por consola diciendo peticion correcta, de lo contrario responderemos al cliente
 * con un mensaje de error, y finalmente se ejcutara el callback, que en sera nda mas y nada 
 * menos que los verbos, get, post, o demas 
 */
function miMiddleware(request, response, next) {
    if(!request.headers['task']){
        response.send('Error, peticion dengada no esta el header "task"');
    }else{
        console.log('pettcion correcta se encuentra el header "task"');
    }
    next();
}

export default miMiddleware;