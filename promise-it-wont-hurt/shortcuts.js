require('es6-promise');
Promise.resolve('RESOLVED!').then(function(resolved) {
  console.log(resolved);
});
Promise.reject('ERROR!').catch(function(error) {
  console.log(error);
});
