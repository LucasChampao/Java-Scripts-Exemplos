// Exercicio 11

let age = 15;
let cnh = true;

if (age > 18 && cnh != true) {
    console.log(`Você tem ${age} anos, mas não possui Cnh !!`);
} else if (age >= 18 && cnh == true) {
    console.log(`Você tem ${age} anos , e possui Cnh !!`);
} else {
    console.log(`Você tem ${age} anos, e Não possui Cnh !!`)
}

