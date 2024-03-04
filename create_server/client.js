var http=require('http');

//Option pour la requête
var options={
 hostname: 'localhost',
 port: '3000',
 path: '/index.html'
};

//La fonction  de callback qui est appelée lorsque le serveur répond à notre demande
var callback= function (res) {
    //Mise à jour des données 
    var body = '' ;
   res.on('data', function(data) {
      body += data ;
    });

    res.on('end',function(){
    // Les données ont été reçues dans leur intégralité.
        console.log(body) ;
     }) ;
}
// Faire une requête au serveur
var req = http.request(options, callback) ;
req.end() ;
