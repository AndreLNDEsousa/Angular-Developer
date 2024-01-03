/*
//Decorators

function ExibirNome(target: any) {
    console.log(target);
    
}
@ExibirNome
class funcionario { }

@ExibirNome
class Quincas{}

*/
 
/*
function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype , { __version: version, __name:"Andre" });
    }
}


@apiVersion("1.10")
class Api { }

const api = new Api()
console.log(api.__name);
*/
//attribute decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let _value = target[key];
//pode concatenar texto, numero... a funcão
        const getteer = () => "[play] " + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menos que ${length}`);
            } else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getteer,
            set: setter,
        });
    };
    
}

class Api{
    @minLength(3)
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
const api = new Api("usa");
console.log(api.name);

    
   
