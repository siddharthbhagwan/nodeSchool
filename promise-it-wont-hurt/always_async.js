require('es6-promise');
let promise = new Promise(function(fulfill, reject) {
  fulfill('PROMISE VALUE');
}).then(console.log);
console.log('MAIN PROGRAM');
