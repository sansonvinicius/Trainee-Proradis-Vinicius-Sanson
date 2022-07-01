

function myFunction (a){


//TO DO

//Apliquei o filter primeiramente para remover os nulos e undefined
a = a.filter(function(x){ return x })

//Agora removendo os valores negativos
a = a.filter(function(x){ return x > -1 });

return a;

}


const A = [1,2,3,null,4,null,5];
const B = [1,2,3,null,4,null,5,-1,6,7];
const C = [1,2,3,null,4,null,5,6,7,8,9];
const D = [1,2,3,null,4,null,5];


console.log(myFunction(A));
console.log(myFunction(B));
console.log(myFunction(C));
console.log(myFunction(D));



