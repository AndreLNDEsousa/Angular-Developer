
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
    name: "Megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log((bot2.name = 'Megazord'));

class Pessoa implements robot2 {
    id: string | number;
    name: string;
    sayHello(): string {
        return `hello  im ${this.name}`;
        
    }
   
    
    constructor (id: number | string, name: string) {
        this.id = id;
        this.name = name;
    }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());




