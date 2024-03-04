//Générez un mot de passe avec les options données. Renvoie une chaîne.

// var generator = require('generate-password');

// var password = generator.generate({
// 	length: 10,
// 	numbers: true
// });

// // 'uEyMTw32v9'
// console.log(password);

//Générez en masse plusieurs mots de passe à la fois, avec les mêmes options pour tous. Renvoie un tableau.

var generator = require('generate-password');

var passwords = generator.generateMultiple(3, {
	length: 10,
	uppercase: false
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);
