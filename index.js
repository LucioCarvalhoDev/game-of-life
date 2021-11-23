const SIZE = 5;
const MARGIN = 1;

function createGrid(size = SIZE) {

    const grid = {
        area: [],
        point: ([x, y]) => {
            const copy = Array.from(grid.area);
            copy[x][y] = `${copy[x][y]}`;
            return copy;
        },
        getNeighborsFromCell: ([line, col]) => {
            let count = 0;
            grid._neighboardsPositions.forEach(([posX, posY]) => {
                try {
                    if (grid.area[line + posX][col + posY])
                        count++;
                } catch { }
            });
            return count;
        },
        changeCell: (...list) => {
            list.forEach(([line, col]) =>
                grid.area[line][col] = +!grid.area[line][col]);
        },
        _neighboardsPositions: [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ],

    };

    // fill
    for (let l = 0; l < size; l++) {
        grid.area[l] = Array(size).fill(0);
    }

    return grid;
}

const grid = createGrid();
