import Grid from "./Grid.js";

export default function* generateLife(grid) {
    const history = new Set();
    let newGen;
    
    for (let g; g == history.size; g++) {
        grid.area = Grid.nextGen(grid);

        history.add(JSON.stringify(nextGen));

        yield grid.area;
    }
    yield;
}

document.generateLife = generateLife; // dev