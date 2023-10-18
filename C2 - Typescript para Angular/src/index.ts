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


//interfaces ( types x interface)

type robot = {
    id: number | string;
    name: string;
};

interface robot2 {
   readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name:"Megaman",
};
const bot2: robot2 = {
    id: 1,
    name:"Megaman",
};

// console.log(bot1);
// console.log((bot2.name = 'Megazord'));

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    sayHello(): string {
        return "hello i'm ";
        
    }
   
    
    constructor (id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
}

*/

//Classes

/* 
public - 
private - acessa dentro da classe.
protected
? - não obrigatório
readonly - somente para leitura


class Personagem {
    public name?: string;
    forca: number;
    skill: number;

    constructor(name: string, forca: number, skill: number) {
        this.name = name;
        this.forca = forca;
        this.skill = skill;
    }

    public attack(): void {
        console.log(`${this.name} Attack with ${this.forca} points`);

    }
}

//Personagem é a superclass.
//magic é a subclass.
class magic extends Personagem{
        magicPoints: number;
        constructor(
        name: string,
        forca: number,
        skill: number,
        magicPoints: number,
    ) {
        super(name, forca, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Personagem('Britney', 10, 90);
const p2 = new magic('Spears', 10 , 35, 58);
p1.attack();


*/

//Generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stArray = concatArray<string[]>(['Britney', 'spears'], ['Goku ', 'Vegeta'])

// numArray.push('Saitama');
console.log(numArray);
console.log(stArray);

