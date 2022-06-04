/** @format */

//proxy pattern
const person = {
	name: "John",
	age: 30,
	job: "developer",
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}`);
	},
};

// proxy object
const personProxy = new Proxy(person, {
	get: function (obj, prop) {
		if (prop in obj) {
			return obj[prop];
		} else {
			console.log(`Property ${prop} does not exist`);
		}
	},
	set: function (obj, prop: string, value: any): any {
		if (prop in obj) {
			obj[prop] = value;
		} else {
			console.log(`Property ${prop} does not exist`);
		}
	},
});

personProxy.name;
personProxy.age;
