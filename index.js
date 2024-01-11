class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  const cat = new Cat("Sasha");
  console.log(cat.speak()); // Output: Sasha says meow!


  class Dog {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return  `${this.name} says woof!`;
    }
}

const dog = new Dog('Rufio');

class Bird {
    constructor(name, isMale) {
      this.name = name;
      this.isMale = isMale;
    }
  
    speak() {
      if (this.isMale) {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  const bird = new Bird("Pablo", true);
  const bird2 = new Bird("Mable", false);
  
  console.log(bird.speak());   // It's me! Pablo, the parrot!
  console.log(bird2.speak());  // Mable says squawk!