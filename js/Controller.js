import Grid from './Grid.js';
import generateLife from './generateLife.js';

export default class Controller {
    constructor(size=5) {
        this.grid = new Grid(size);
        this.table = document.querySelector('.m_grid_area');
        this.play = document.querySelector('[data-play]');
        this.cells;

        this.intervalId;

        this.init();
    }

    init() {
        // Gera tabela 
        this.updateView();

        // preenche lista de celulas
        this.cells = Array.from(document.querySelectorAll('.m_grid_area_line_cell'));
        this.cells.forEach(cell => {
            cell.onclick = (e) => {
                console.log('clicou')
                cell.dataset.state = +!+cell.dataset.state;
            }
        })

        // ligação aos controles
        this.play.onclick = () => {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = undefined;
            } else {
                this.updateModel();
                this.simulate();
            }

        }
    }

    simulate() {
        const gen = generateLife(this.grid);
        this.grid.area = gen.next().value;

        this.updateView()

    }

    updateView() {
        
        this.table.innerHTML = this.grid.area.map(line => {
            return `<tr class="m_grid_area_line">${line.map(cell => 
                `<td class="m_grid_area_line_cell" data-state="${cell}"></td>`
            ).join('')}</td>`
        }).join('')
    }

    updateModel() {
        const area = [];

        this.cells.forEach((elem, idx) => {
            if (!area[Math.trunc(idx / this.grid.size)])
                area[Math.trunc(idx / this.grid.size)] = []
            area[Math.trunc(idx / this.grid.size)].push(+elem.dataset.state)
        })

        this.grid.area = area;
    }
}
