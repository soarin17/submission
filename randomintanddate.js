function randint (){
    console.log(Math.random() * Math.random() + Math.random());

}
function date (){
    const currentDate = new Date();
    console.log(currentDate);

}
function randomroundedint (){
    const roundedRandom = Math.round(Math.random() * 10);
    console.log(roundedRandom);
}
randint();
date();
randomroundedint();