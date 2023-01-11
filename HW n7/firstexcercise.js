//First excercise 

let Animal = {
    name: prompt('Enter the dog name'),
    kind: prompt('What kind is the dog'),
    speak: "I'm hungry!",
    message: function (){
        alert (`Dog ${Animal.name} is ${Animal.kind} and says: ${Animal.speak}`)
    }
}

Animal.message();
