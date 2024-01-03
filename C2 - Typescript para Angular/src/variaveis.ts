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
//arrays
let dados: string[] = ['Andre', 'Marcelo', 'Bia'];
let dados2: Array<string> = ['Andre', 'Marcelo', 'Bia'];
//array multi-type: vetor com dois tipos de conteúdos diferentes:
let infos: (string | number)[] = ['Andre', 37];

//Tuplas:
let boleto: [string, number, number] = ['agua conta', 110.90, 102025458];

//Tipo Date(padrão americano  ano, mes, dia e hora)
let aniversario: Date = new Date("2024-08-03 5:00");
console.log(aniversario.toString());

