let userName = prompt("Write your Name");
let mood = prompt("What's your mood today?");
let activity = prompt("What activity are you doing today?");
let userInputs = [userName, mood, activity];

function myStory(userinputs){
    message = `This is ${userName}. ${userName} is a nice person.Today they are ${mood}. They are ${activity} all day.`
    alert(message);
    return message;
}
myStory(userInputs);





