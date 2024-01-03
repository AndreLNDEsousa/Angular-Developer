//Generics
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stArray = concatArray<string[]>(['Britney', 'spears'], ['Goku ', 'Vegeta'])

// numArray.push('Saitama');
console.log(numArray);
console.log(stArray);
