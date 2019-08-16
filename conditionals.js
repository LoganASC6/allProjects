
/*for(let prime = 1; prime< 1001; prime++) {
    if(prime%2 == 0){
        if(prime%3 ==0){
            if (prime%5 ==0){
                if (prime%7 ==0){
                }

            }

        }
        
} else {
    console.log(prime);
}
    }
    */

let prime = parseInt (process.argv[2]);

if (prime%2 == 0){
        console.log("not a prime");
}

else if(prime%3 == 0){
    console.log("not a prime");
}
else if(prime%5 == 0){
     console.log("not a prime");
 }
 else if (prime%7 == 0){
     console.log("not a prime");

 }
 else {
     console.log(prime);
 }
