/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding

When in global scope, 'this' will always bind to the Window object. 'this' will always try to point to the Window in any place it appears.

* 2. Implicit binding

The way 'this' automatically binds to an object without being explicitly bound. 
Implicit binding always refers to object methods. With implicit binding, we need to look at where
the method was called (not where it was created): the object left of the dot in a method is what 'this' binds to.

* 3. New binding

New binding comes into play with constructor functions (functions that create objects). The 'new' keyword that we use
when creating constructor functions automatically assigns a 'this' binding. In this case, the 'this' keyword
refers to the specific instance of the object that is created and returned by the constructor function. 

* 4. Explicit binding

Explicit binding occurs when .call(), .apply(), or .bind() are used on a function. We intentionally bind this to an object.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// In this example, the 'this' keyword has no context, so it binds to the Window object

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Rasha");
  

// Principle 2

// code example for Implicit Binding

const user = {
    name: 'Rasha',
    age: 40,
    greet() {
      alert(`Hello, my name is ${this.name}`)
    }
  }

user.greet();



// Principle 3

// code example for New Binding

function User (name, age) {
    this.name = name
    this.age = age
}

const me = new User('Rasha', 40);

// Principle 4

// code example for Explicit Binding

function greet () {
    alert(`Hello, my name is ${this.name}`)
  }
  
  const user = {
    name: 'Rasha',
    age: 40,
  }

  greet.call(user);