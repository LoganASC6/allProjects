function random(num){
    let interval = Math.random() * (num-0)+0;
    interval = Math.floor (interval);
    console.log(interval);

}

random(999);

function randomLetter(string){
    let max = string.length;
    let interval = Math.random() * (max -0);
    interval = Math.floor(interval);
    console.log(string[interval]);    
}
randomLetter("abcdefghijklmnopqrstuvwxyz")

function randomSign(string){
    let max = string.length;
    let interval = Math.random() * (max -0);
    interval = Math.floor(interval);
    console.log(string[interval]); 
}
randomSign("!@#$%&*+;")

//use function to create 5 letters, 5 signs

function randomNumber(string){
    let max = string.length;
    let interval = Math.random() * (max -0)
    internal = Math.floor(interval);
    console.log(string[interval]);
}
randomNumber("123456789")

