

const A = [1, 2, 3];
const B = [1, 2, 3, 4, 5];
let resposta


//TO DO
//comparar listas

//Comparando se as listas são exatamente iguais.
if(JSON.stringify(A)==JSON.stringify(B))
    resposta = "A é igual a B";
//Comparando se uma lista está contida na outra
else if (A.some(el => B.includes(el))){
   resposta = "A é uma sublista de B"
}

console.log(`Resposta:${resposta}`);



