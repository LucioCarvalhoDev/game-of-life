const SIZE = 5;
const MARGIN = 1;

function repeat(times, func, ...args) {
    while (times) {
        func(args);
        times--;
    }
}

function createGrid(size = SIZE) {
    // fill
    const grid = [];

    for (let l = 0; l < size; l++) {
        grid[l] = Array(size).fill(0);
    }

    grid.neighbors = ([x, y]) => {
        let c = 0;

        grid[x - 1] || [][y - 1] == 1 ? c++ : '';
        grid[x - 1] || [][y] == 1 ? c++ : '';
        grid[x - 1] || [][y + 1] == 1 ? c++ : '';

        grid[x] || [][y - 1] == 1 ? c++ : '';
        grid[x] || [][y + 1] == 1 ? c++ : '';

        grid[x + 1] || [][y - 1] == 1 ? c++ : '';
        grid[x + 1] || [][y] == 1 ? c++ : '';
        grid[x + 1] || [][y + 1] == 1 ? c++ : '';

        return c;
    };

    grid.point = (([x, y]) => {
        const copy = Array.from(grid);
        copy[x][y] = `${copy[x][y]}`;
        return copy;
    });

    return grid;
}

function changeCell(grid, ...list) {
    list.forEach(([line, roll]) => grid[line][roll] = +!grid[line][roll]);
}

function getNeighbors(grid, coords) {
    const len = grid.length;
    let neighbors = 0;
}

const grid = createGrid();
changeCell(grid, [1, 0]);
changeCell(grid, [0, 1]);
console.log(grid.neighbors([0, 0]));
console.log(grid);
