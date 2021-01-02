const Car = require('./defaultCar');
 
class BMW extends Car {
    constructor() {
        super('BMW')
    }
}
 
module.exports = BMW;