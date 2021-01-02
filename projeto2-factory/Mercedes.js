const Car = require('./defaultCar');
 
class Mercedes extends Car {
    constructor() {
        super('Mercedes')
    }
}
 
module.exports = Mercedes;