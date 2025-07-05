// Encapsulation is the concept of bundling data (properties) and methods (functions) together within an object, allowing the object to control access to its internal data and behaviour. This helps to hide implementation details and expose only necessary interfaces to interact with the object. In Js, you can achieve encapsulation by using closures, symbols, or naming conventions to simulate private members and expose public interfaces.

// In Js, we can achieve encapsulation by using closures to create private members.

function Counter() {
  let _count = 0; // Private variable

  // Public method that can access and modify the private variable

  this.increment = function () {
    _count++;
  };

  this.decrement = function () {
    _count--;
  };

  this.getCount = function () {
    return _count;
  };
}

var counter = new Counter();

console.log(counter.getCount());

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log(counter.getCount()); // 3

counter.decrement();
console.log(counter.getCount());  // 2

console.log(counter._count);  // undefined
