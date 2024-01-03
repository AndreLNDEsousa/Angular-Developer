//Classes

/* 
public - 
private - acessa dentro da classe.
protected
? - não obrigatório
readonly - somente para leitura

*/
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




