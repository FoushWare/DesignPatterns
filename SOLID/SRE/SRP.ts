/** @format */

// single responsibility principle (SRP) in javascript
//
// Purpose:
//
// This is a simple example of the SRP in javascript.
//
// The SRP is a design principle that states that a class should have only one
// reason to change.
//
// The SRP states that a class should have only one reason to change.
//
// Example:
//

// abstract class employee

abstract class Employee {
	// abstract method
	abstract calculateSalary(): number;
	abstract hoursWorked(): number;
	abstract storeToDatabase(): any;
}

// class developer
class Developer extends Employee {
	// extends implement only the abstract methods
	calculateSalary(): number {
		return this.hoursWorked() * 100;
	}
	hoursWorked(): number {
		return 100;
	}
	storeToDatabase(): any {
		// store to database
	}
}

// class manager
class Manager extends Employee {
	calculateSalary(): number {
		return this.hoursWorked() * 200;
	}
	hoursWorked(): number {
		return 200;
	}
	storeToDatabase(): any {
		// store to database
	}
}
// =============================
