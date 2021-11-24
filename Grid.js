export default class Grid {
    /**
     * @constructor
     * @param {number} size 
     */
    constructor(size) {
        this.size = size;
        this.area = [];
        this.init();
    }

    init() {
        for (let l = 0; l < this.size; l++) {
            this.area[l] = Array(this.size).fill(0);
        }
    }

    static neighboards() {
        return [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1]
        ];
    }

    countNeighboards(cell) {
        let acc = 0;

        Grid.neighboards().forEach(([x, y]) => {
            if (this.get([x, y]) == 1)
                acc++;
        });

        return acc;
    }

    /**
     * 
     * @param {[number, number]} cell 
     * @return {number}
     */
    get([x, y]) {
        try {
            return this.area[x][y];
        } catch {
            return 0;
        }
    }

    set([x, y], state) {
        this.area[x][y] = state;
    }
}

function createGrid(size = SIZE) {

    const grid = {
        area: [],
        point: ([x, y]) => {
            const copy = Array.from(grid.area);
            copy[x][y] = `${copy[x][y]}`;
            return copy;
        },
        get: ([line, col]) => {
            return grid.area[line][col];
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