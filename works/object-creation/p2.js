
// Example of this and bind - obj creation in JS 2

//this is like in normal english language, it doesn't mean anything without some context

//bind-  explicitly tell what 'this' is
//when we use bind  we are creating a new copy of the function. it's just that 'this' is bound to a specific value always
function talk() {
    console.log(this.sound);
}

let cat = {
    sound: 'Meow!!'
}
 
var speak = talk.bind(cat)
speak();//Meow!!

// or we can do
let dog = {
    speak: talk,
    sound: "arf!!"
}

dog.speak(); //arf!!
