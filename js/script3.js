

function User(firstName,lastName) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.sayHello = function () {
        alert('Hello, my firstName is' + ' ' + firstName + ' ' + 'lastName is' + ' ' + lastName + '. I am very exited to learn JavaScript!');
    };
}

const obj = new User('Valik', 'Lapotkov');

console.log(obj);

obj.sayHello();
