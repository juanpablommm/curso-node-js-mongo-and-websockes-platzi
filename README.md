### CURSO DE NODE.JS: BASE DE DATOS MONGODB Y WEBSOCKETS PLATZI

clase 3, manejando los **headers**, para leer las cabeceras del request, de la peticcion que hagamos,simplemnte en nustro metodo get, post, o demas verbo que estemos utlizando, solamente
tendremos que llamar a los headers ```request.header``` y obtendremos los headers que veine en la peticion: ```js 
{
  'content-type': 'application/x-www-form-urlencoded',
  task: 'nose',
  'user-agent': 'PostmanRuntime/7.29.2',
  accept: '*/*',
  'postman-token': '62f43cb1-e18a-4aaf-b3f6-6e27c015fd1b',
  host: 'localhost:3000',
  'accept-encoding': 'gzip, deflate, br',
  connection: 'keep-alive',
  'content-length': '9'
} ```

entre las cabeceras mas comunes que podemos encontrar en una peticion: 
* **user-agent** que nos mensionara el agente desde donde realizamos la peticion, por ejemplo postman, chrome, brave, etc.
* **host** que nos dira el host de la peticion
* **content-type** el cual diara el tipo de contenido de la peticion
* **cahce-control** para setear cache especifico para imagenes, archivos de js, ect

**mandar headers en el response**
para mandar headers en el response simplmente ```response.header({
    "custom-header": "Mi valor personalizado"
})```
donde simplmente pasmo un objecto json como paramtro a headers en el response, y vamos colocando nuestra cabeceras que necesitemos enviar con su respectivo valor