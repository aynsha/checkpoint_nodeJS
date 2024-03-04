var fs= require('fs');

 //Contenu du fichier
 var content= 'Hello Node';

 //Chemin du fichier
 var  filepath = 'welcome.txt';

//Ecriture dans le fichier
fs.writeFile(filepath, content, (err)=>{
    if(err){
        console.log('une erreur');
    }
    console.log('le fichier a été créer');
}) ;

console.log("Go pour obtenir des infos sur welcome.text !") ;
fs.stat('welcome.txt', function (err, stats) {
   if (err) {
      return console.error(err) ;
   }
   console.log(stats) ;
   console.log("Got file info successfully !") ;
   
   // Vérifier le type de fichier
   console.log("isFile ? " + stats.isFile()) ;
   console.log("isDirectory ? " + stats.isDirectory()) ;    
}) ;