// Immediately Invoked Function Expressions(IIFE)

// Syntax

// (Function defination)(function execution)
//i.e,

// below given is a named iife
(function chai(){
    console.log(`DB CONNECTED`);
})();

// An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and executed immediately after its creation. It’s often used to create a new scope and avoid polluting the global namespace.

// Polluting the global namespace means adding too many variables, functions, or objects directly to the global scope of a program (especially in languages like JavaScript). This can lead to:

// Name collisions (different pieces of code trying to use the same name)

// Harder debugging and maintenance

// Reduced modularity and reusability


// Why Avoid Global Namespace Pollution?
// In large projects or when using multiple libraries, it prevents unintended interactions.

// Helps keep your code organized and predictable.


// below given is unamed iffe
( (name) => {
    console.log(`DB CONNECTED AGAIN ${name}`);
})('Raghav');

// make sure to use ";" after the iife as sometimes it needs to be closed manually and by adding ";" we end it.