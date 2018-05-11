const person = {
    name: 'Teo',
    age: 10,
    school: { name: 'Khoa Pham', address: '92 LTR' },
    sayHello: function() {
        console.log('Xin chao, toi la ' + this.name);
    }
};

const person2 = {
    name: 'Ti',
    age: 12,
    school: { name: 'Khoa Pham', address: '92 LTR' },
    sayHello: function() {
        console.log('Xin chao, toi la ' + this.name);
    }
};


// person.name = 'Teo Nguyen';
// delete person.age;
// console.log(person);
// console.log(person.school.address);
person2.sayHello();
