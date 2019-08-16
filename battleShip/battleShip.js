function setup(){
    createCanvas(1000, 1000);
    background(255,255,255);
   

}
let start = 0;
let end = 1000;
let fir = 100;

function draw(){
fill (255,255,255);
   for (let i = 0; i < 10; i ++){
    line (fir,start,fir,end);
    line(start,fir,end,fir)
    fir = fir + 100;
   }
}
var string = 
    [["w","s","w","w","w","s","s","w","w","w"],
    ["w","w","w","s","s","w","w","w","w","s"],
    ["w","w","w","w","w","w","w","w","w","w"],
    ["w","w","w","w","w","w","w","w","w","w"],
    ["s","s","w","w","w","w","w","w","s","s"],
    ["w","w","s","w","s","s","w","w","w","w"],
    ["w","s","w","w","s","s","w","w","w","w"],
    ["w","w","w","w","w","w","w","w","w","w"],
    ["w","w","w","w","w","w","w","w","w","w"],
    ["s","s","s","w","w","w","w","s","w","w"]];


   




