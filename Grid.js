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

    evalCell(cell) {
        let state = this.get(cell);
        let neighboards = this.countNeighboards(cell);
        if (state) {
            if (neighboards > 3 || neighboards < 2)
                state = 0;
        } else {
            if (neighboards == 3)
                state = 1;
        }

        return state;
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

    static nextGen(grid) {

        let res = grid.area.map((line, x) => {
            return line.map((item, y) => grid.evalCell([x, y]));
        });

        return res;
    }

    countNeighboards([line, col]) {
        let acc = 0;

        Grid.neighboards().forEach(([x, y]) => {
            if (this.get([line + x, col + y]) == 1)
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