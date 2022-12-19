//First Excercise

let userName = prompt("Write your Name");
let mood = prompt("What's your mood today?");
let activity = prompt("What activity are you doing today?");
let userInputs = [userName, mood, activity];

function myStory(userInputs){
    let message = `This is ${userInputs[0]}. ${userInputs[0]} is a nice person.Today they are ${userInputs[1]}. They are ${userInputs[2]} all day.`
    alert(message);
    return message;
}
myStory(userInputs);





