console.log('Starting app');

setTimeout(() => {
  console.log('1st callback');
}, 2000);


setTimeout(() => {
  console.log('2nd callback');
}, 0);

console.log('Finishing up');