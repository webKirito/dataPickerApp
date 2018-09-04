export default class App {
    constructor(componentsObj) {
        this.date = new Date();
        this.state = {
            day : this.date.getDay(),
            month : this.date.getMonth(),
            year : this.date.getFullYear()
        };
        this.components = componentsObj;
        this.view = document.querySelector('.app');
    }

    render() {
        this.view.innerHTML = `
            ${Object.keys(this.components).map(
                (compKey) => {
                    if (compKey === 'calendar') {
                        return this.components[compKey].render({month : this.state.month, year : this.state.year});
                    } else {
                        return this.components[compKey].render();
                    }
                }
            ).join('')}
        `
    }

    setState(obj) {
        this.state = {...obj};
    }

    renderComponent(key, params = null) {
        this.components[key].render(params);
    }

    initController() {
        this.view.addEventListener('click', (e) => {
            if (e.target.className === "fromInput") {
                console.log(e.target.value)
            }
        })
    }

    init() {
        this.render();
        this.initController();
    }
}