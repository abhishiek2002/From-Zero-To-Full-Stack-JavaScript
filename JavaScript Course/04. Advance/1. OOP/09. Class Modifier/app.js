// In JS, class modifiers are used in the context of classes and objects, although Js does not have traditional access modifiers like other object-oriented languages (e.g. Java). However, you can achieve similar effects using different conventions and techniques.

// 1. private
// 2. public
// 3. protected

// But in Js, there is no such modifiers

function MyClass(publicField, privateField, protectedField) {
  // Public Field
  this.publicField = publicField;

  // Private Field (closure)
  const _privateField = privateField;

  // Protected Field
  const _protectedField = protectedField;

  // Public Method
  this.publicMethod = function () {
    return `Public Field: ${this.publicField}`;
  };

  // Private Method (closure)
  function _privateMethod() {
    return `Private Method: ${_privateField}`;
  }

  // Protected Methos
  function _protectedMethod() {
    return `Protected Method: ${_protectedField}`;
  }

  // Method to access protected method
  this.accessProtectedMethod = function () {
    return _protectedMethod;
  };
}

var myObj = new MyClass("Public Data", "Private Data", "Protected Data");
console.log(myObj.publicField);

// console.log(myObj._privateField);

// console.log(myObj._protectedField);

console.log(myObj.publicMethod());
// console.log(myObj._privateMethod());
// console.log(myObj._protectedMethod());

console.log(myObj.accessProtectedMethod());
