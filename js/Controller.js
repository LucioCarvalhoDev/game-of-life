import Grid from './Grid.js';

export default class Controller {
    constructor(size=5) {
        this.grid = new Grid(size);
        this.table = document.querySelector('.m_grid_area');
        this.cells;

        this.init();
    }

    init() {
        // Gera tabela 
        this.table.innerHTML = this.grid.area.map(line => {
            return `<tr class="m_grid_area_line">${line.map(cell => 
                `<td class="m_grid_area_line_cell" data-state="0"></td>`
            ).join('')}</td>`
        }).join('')

        // preenche lista de celulas
        this.cells = Array.from(document.querySelectorAll('.m_grid_area_line_cell'));
        this.cells.forEach(cell => {
            cell.onclick = (e) => {
                cell.dataset.state = +!+cell.dataset.state;
            }
        })

        // ligação aos controles

    }

    updateModel() {
        const area = [];

        this.cells.forEach((elem, idx) => {
            if (!area[Math.trunc(idx / this.grid.size)])
                area[Math.trunc(idx / this.grid.size)] = []
            area[Math.trunc(idx / this.grid.size)].push(elem.dataset.state)
        })

        this.grid.area = area;
    }
}
