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
// const personProxy = new Proxy(person, {
// 	get: function (obj, prop) {
// 		if (prop in obj) {
// 			return obj[prop];
// 		} else {
// 			console.log(`Property ${prop} does not exist`);
// 		}
// 	},
// 	set: function (obj, prop, value) {
// 		if (prop in obj) {
// 			obj[prop] = value;
// 			return true
// 		} else {
// 			console.log(`Property ${prop} does not exist`);
// 		}
// 	},
// });
const personProxy = new Proxy(person, {
	get: function (obj, prop) {
		console.log(`The value of ${prop} is ${obj[prop]}`);
	},
	set: function (obj, prop, value) {
		console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
		obj[prop] = value;
		return true;
	},
});


personProxy.name;
personProxy.age = 10;
