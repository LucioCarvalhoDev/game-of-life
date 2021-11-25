import Grid from "./Grid.js";

console.log("========");

const grid = new Grid(5);
grid.set([2, 1], 1);
grid.set([2, 2], 1);
grid.set([2, 3], 1);
grid.set([2, 4], 1);

function play(grid) {
    const history = new Set();
    let len = 0;

    do {
        console.log(grid.area);
        history.add(JSON.stringify(grid.area));
        len++;

        grid.area = Grid.nextGen(grid);
    } while (history.size == len);
}

play(grid);