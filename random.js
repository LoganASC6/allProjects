

/*function myrandom(x){
    let random = Math.random(x)*(200+799);
    let number = Math.floor(random)
    console.log(number)
}

    myrandom(26);


function randomLetter(string){
    let letter2 = Math.random() * ((string.length-1) - 0)+0;
    let floor = Math.floor (letter2);
    let letter = string[floor];
    console.log(letter);
}

    randomLetter("abcdefghijklmnopqrstuvwxyz");*/

   // function randomSign(x){
     //   let sign2 = Math.random() 
       // let floor = Math.floor (sign2);
        //let sign= string[floor];
        //console.log(sign);

        //randomSign("@!#$%&*?")  
    //}

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

function hypotenuse( sideA, sideB){
    let sideA_squared = Math.pow( sideA,2);
    let sideB_squared =Math.pow(sideB,2)
    let sideC_squared = sideA_squared + sideB_squared;
    let sideC = Math.sqrt(sideC_squared);
    
    console.log(sideC);
 
}
hypotenuse(7,5)

