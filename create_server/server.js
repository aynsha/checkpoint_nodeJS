var http= require ('http');
var fs= require ('fs');
var url= require ('url');

//création du serveur
http. createServer(function (request, response) {
  //Analyse de la requête 
  var pathname= url.parse(request.url).pathname;

  //Imprime le nom du fichier
  console.log('Requête pour : ' + pathname +'reçue');

  //Pour lire le contenu du fichier
  fs.readFile(pathname.substr(1), function(err, data){
    if(err){
        console.log(err);

        //Retourne 404 si la page  n'est pas trouvée
        response.writeHead(404, {'Content-Type':  'text/html'});
    }else{
        //Retourne 200 si la  page est trouvée
        response.writeHead(200, {'Content-Type': 'text/html'});
        
        //Ecriture du contenu du fichier dans le corps de la reponse
        response.write(data.toString());
    }
    // Envoi de la réponse au client
    response.end();
  });
  }).listen(3000);
console.log("Server est en cours d'éxecution au http://127.0.0.1:3000/");