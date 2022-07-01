
function myFunction (a){

//TO DO
    //Converti o valor para inteiro para trabalhar com ele e poder transforma-lo em um array.
    let convertToInt= a => Number(a);
    a = Array.from(String(a), convertToInt);
    return a;
}



console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));