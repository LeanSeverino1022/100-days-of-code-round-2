// bind and this - Object Creation in JavaScript P1 - FunFunFunction

// There is no right way for object creation. Know the different ways and determine what works for you

//Basic object Object

let dog = {
    sound: 'woof',
    talk: function() {
        console.log(this.sound);
    }
}

dog.talk(); //"woof"

let talkFunction = dog.talk.bind(dog);

talkFunction(); //"woof"