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
//variaveis
//tipos primitivos: bollean, number, string
//boolean
//number
//string

let ligado: boolean = false;
let nome: string = 'Andre';
let idade: number = 30;



//Tipos especiais: null, undefined:
//null
//undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes : any(qualquer coisa no retorno), void(vazio):

let retorno: void
let retornoView: any = 'Andre';

//Objeto - sem previsibilidade:
let produto :object = {

    name: 'Andre',
    cidade: 'SP',
    idade: 30,
};

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
    
}
*/
//arrays
let dados: string[] = ['Andre', 'Marcelo', 'Bia'];
let dados2: Array<string> = ['Andre', 'Marcelo', 'Bia'];
//vetor com dois tipos de conteúdos diferentes:
let infos: (string | number)[] = ['Andre', 37];