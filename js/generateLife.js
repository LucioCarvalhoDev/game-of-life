import Grid from "./Grid.js";

export default function* generateLife(grid) {
    const history = new Set();
    let newGen;
    
    for (let g = 0; g == history.size; g++) {
        newGen = Grid.nextGen(grid);

        history.add(JSON.stringify(newGen));
        
        yield newGen;
    }
    yield;
}

document.generateLife = generateLife; // dev