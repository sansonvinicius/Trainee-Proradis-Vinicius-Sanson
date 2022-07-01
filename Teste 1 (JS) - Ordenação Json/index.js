


let carros = [
    { 
        nome: "Peugeot",
        preco: "50000.99"
    },
    { 
        nome: "Honda",
        preco: "80500.70"
    },
    { 
        nome: "Fox",
        preco: "70000.50"
    },
    { 
        nome: "Gol",
        preco: "45000.65"
    },            
    
]
//Utilizei spread operator para fazer cópias de carros e não mexer na orderm original
let carrosOrdemPreco = [...carros];
let carrosOrdemAlfa = [...carros]

console.log("Lista de carros: " + JSON.stringify(carros));

//Ordenando por preço do menor para o maior
carrosOrdemPreco.sort(function(a,b) {
    return a.preco < b.preco ? -1 : a.preco > b.preco ? 1 : 0;});

//Ordenando de forma alfabética
carrosOrdemAlfa.sort(function(a,b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;});



//TO DO
//Ordenar do menor preço para o maior 
console.log("Lista de carros ordenados por preço: ");
console.log(carrosOrdemPreco)


//TO DO
//Ordenar por ordem alfabética
console.log("Lista de carros ordenados por nome: ");
console.log(carrosOrdemAlfa)



