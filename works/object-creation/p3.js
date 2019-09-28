//Learning Prototype Basics - obj creation in JS 3

// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing prototype-based inheritance. 


//in js we achieve inheritance through prototypes
//real worl example of a class is a blueprint
//real world example of prototype would be a delegate - https://youtu.be/YkoelSTUy7A?t=96

//why learn prototypes when es6 has already a class? first of all that reasoning will lead you to trouble. class keyword in js is just a thin layer around the prototype it actually uses prototype under the hood. Syntatic sugar I should say. YOu should never skip learning prototype if you want to be a solid js programmer. The reason they added the class keyword is because people from other programming background is very very used to classes and confused about prototype and they don't want to learn new stuff and this other people are big and they can influence... Ironically prototype is simpler concept than classes but it's still very confusing when coming into js if you're used to inheritance model

// notes from mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

function talk() {
    console.log(this);
    console.log(this.sound);
}

let animal = {
    talk
}

let cat = {
    sound: 'Meow!!'
}

Object.setPrototypeOf(cat, animal);
cat.talk();

// classes in other languages like c++ use classes like a blueprint. In js howver, prototype is just a way of saying that for this object, use this other object as a backup/delegate/prototype.
// if someone calls my object with a property that does not exist on my object, look in this other object.
//In JavaScript, class inheritance is implemented on top of prototypal inheritance, 