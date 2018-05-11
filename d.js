// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello = function() {
//         console.log('Xin chao, toi la ' + this.name);
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Xin chao, toi la ' + this.name);
    }
}

const teo = new Person('Teo', 10);
const ti = new Person('Ti', 20);

teo.sayHello();
ti.sayHello();
// console.log(teo);
// console.log(ti);
