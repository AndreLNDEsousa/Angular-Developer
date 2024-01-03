// type heroi = {
//     name: string;
//     vulgo: string;
// };

// function printaObjeto(pessoa: heroi) {
//     console.log(pessoa);

// }

// printaObjeto({
//     name: "Bruce Wayne",
//     vulgo: "Batman",
// });
/*

*/
//Funções

function addNumber(x: number, y: number): number {
    return x + y;
}

function addToHello(name: string) {
    return `Hello ${name}`;
}

let soma: number = addNumber(4, 7);

console.log(soma);
console.log(addToHello(" Andre"));

