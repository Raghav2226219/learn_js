# JS and classes

## OOP

## Objects
-> collection of properties and methods
-> to LowerCase

## why use OOPS

## parts of OOP

Object literals

-> Connstructor function
-> Prototypes
-> Classes
-> Instances (new, this)

## 4 pillars

-> Abstraction
-> Encapsulation
-> Inheritance
-> Polymorphism


The 4 pillars of Object-Oriented Programming (OOP) form the foundation of designing robust, reusable, and maintainable software. Here's a brief explanation of each:

✅ 1. Abstraction
Definition: Hiding the internal implementation details and showing only the essential features of an object.

Example:
When you drive a car, you use the steering wheel, accelerator, and brakes — but you don’t need to understand how the engine or transmission works internally.

In Code:

java
Copy code
abstract class Animal {
    abstract void makeSound(); // only the interface, not the implementation
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Bark");
    }
}


✅ 2. Encapsulation
Definition: Bundling data (variables) and methods that operate on the data into a single unit (class), and restricting direct access to some of the object's components.

Example:
You cannot directly access the private data of a class from outside; instead, you use getters and setters.

In Code:

java
Copy code
class Student {
    private String name; // private variable

    public String getName() { // getter
        return name;
    }

    public void setName(String name) { // setter
        this.name = name;
    }
}


✅ 3. Inheritance
Definition: One class (child or subclass) inherits the properties and behaviors (fields and methods) of another class (parent or superclass).

Example:
A Car class can inherit from a more general Vehicle class.

In Code:

java
Copy code
class Vehicle {
    void startEngine() {
        System.out.println("Engine started");
    }
}

class Car extends Vehicle {
    void openTrunk() {
        System.out.println("Trunk opened");
    }
}


✅ 4. Polymorphism
Definition: The ability of an object to take many forms. It allows one interface to be used for a general class of actions.

Types:

Compile-time Polymorphism (Method Overloading)

Run-time Polymorphism (Method Overriding)

In Code:

java
Copy code
// Method Overloading
class MathUtils {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

// Method Overriding
class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Meow");
    }
}

