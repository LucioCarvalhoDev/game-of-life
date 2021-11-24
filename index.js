console.log('---');

const SIZE = 6;
const MARGIN = 1;

function createGrid(size = SIZE) {

    const grid = {
        area: [],
        point: ([x, y]) => {
            const copy = Array.from(grid.area);
            copy[x][y] = `${copy[x][y]}`;
            return copy;
        },
        get: (line, col) => {
            return Array.from(grid.area[line][col]);
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
        changeCell: (state, ...list) => {
            list.forEach(([line, col]) =>
                grid.area[line][col] = state);
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


function step(grid) {
    // caso todas as celulas estejam mortas não faz nada
    if (grid.area.flat(Infinity).indexOf(1) == -1)
        return true;

    const newGrid = Object(grid);

    // calcula o novo estado de cada celula
    grid.area.forEach((line, lineIdx) => {
        line.forEach((col, colIdx) => {
            const cell = [lineIdx, colIdx];
            const neigh = grid.getNeighborsFromCell(cell);

            // caso "viva"
            if (neigh > 3 || neigh < 3) {
                newGrid.changeCell(0, cell);
            } else {
                newGrid.changeCell(1, cell);
            }

        });
    });
    grid.area = newGrid.area;

    return false;
}

const grid5 = createGrid();
grid5.changeCell(1, [2, 2], [3, 3], [4, 2], [3, 1], [3, 2]);

console.log(grid5.area);

const id = setInterval(() => {
    const stop = step(grid5);
    console.log(grid5.area);
    if (stop)
        clearInterval(id);
}, 1000);
