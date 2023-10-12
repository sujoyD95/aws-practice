//importing classes
//still request to person.js: no bundaling: use webpack
import { Person } from './classes/person.js';
//working with classes
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} is from ${this.country}`);
    }
}
const mashrafi = new Player('mashrafi', 35, 'bd');
const sakib = new Player('sakib', 32, 'bd');
//assigning class as type
const players = [];
players.push(mashrafi);
players.push(sakib);
const sujoy = new Person('sujoy', 24, 'learner');
console.log(sujoy);
