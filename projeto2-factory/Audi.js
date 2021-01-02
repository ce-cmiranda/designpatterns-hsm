const Car = require('./defaultCar');
 
class Audi extends Car{
    constructor () {
        super('Audi')
    }
}
 
module.exports = Audi;
