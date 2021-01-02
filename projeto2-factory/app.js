const CarFactory = require('./carFactory');
 
const Audi = CarFactory.create('Audi');
const BMW = CarFactory.create('BMW');
const Mercedes = CarFactory.create('Mercedes');
const Audi2 = CarFactory.create('Audi');
 
Audi.showInfo();
Audi2.showInfo();
BMW.showInfo();
Mercedes.showInfo();