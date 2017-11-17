/* const idMaker = function* () {
    let index = 1
    while(true)
        yield index
        index++
}

let gen = idMaker(); // "Generator { }"

console.log(gen.next().value)
console.log(gen.next().value) */

function* idGenerator() {
    let id = 1;
    while (true){
    yield id;
    id++
    }
}

let idMaker = idGenerator(); 
