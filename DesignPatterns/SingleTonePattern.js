// The blow code is  a singleton pattern. but it is not a good practice. it's anti-pattern. in Javascript becasue we can create
// a new object with the same prototype. without classes 🚀
// const counter = {
// 	count: 0,
// 	getCount: function () {
// 		return this.count;
// 	},
// 	increment: function () {
// 		this.count++;
// 	},
// 	decrement: function () {
// 		this.count--;
// 	}
// };
// Object.freeze(counter);
// export { counter };


let instance;
let counter = 0;

class Counter {
	constructor() {
		if (instance) {
			throw new Error("You can only create one instance!");
		}
		instance = this;
	}

	getInstance() {
		return this;
	}

	getCount() {
		return counter;
	}

	increment() {
		return ++counter;
	}

	decrement() {
		return --counter;
	}
}
// Freeze the instance to prevent further changes
const SingleTonCounter = Object.freeze(new Counter());
export default SingleTonCounter;