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
        this.view.innerHTML = '';
        for (let compKey in this.components) {
            if (compKey === 'calendar') {
                this.components[compKey].render({month : this.state.month, year : this.state.year});
            } else {
                this.view.innerHTML += this.components[compKey].render();
            }
        }
        // this.components.calendar.render({month : this.state.month, year : this.state.year});
        // this.view.innerHTML = `
        //     ${Object.keys(this.components).map(
        //         (compKey) => {
        //             if (compKey === 'calendar') {
        //                 return this.components[compKey].render({month : this.state.month, year : this.state.year});
        //             } else {
        //                 return this.components[compKey].render();
        //             }
        //         }
        //     ).join('')}
        // `
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
                let calendar = document.querySelector('.calendar');
                calendar.classList.add('show');
                console.log(calendar);
            }
            if (e.target.classList.contains('prevBtn')) {
                this.state = {...this.components['calendar'].switchMonthLeft({month : this.state.month, year : this.state.year})};
                this.renderComponent('calendar' , {month : this.state.month, year : this.state.year});
                // console.log(e.target.className)
            }
            if (e.target.classList.contains('nextBtn')) {
                this.state = {...this.components['calendar'].switchMonthRight({month : this.state.month, year : this.state.year})};
                this.renderComponent('calendar', {month : this.state.month, year : this.state.year});
            } 
            if (e.target.classList.contains('day')) {
                let calendar = document.querySelector('.calendar');
                calendar.classList.remove('show');
                let date = new Date(e.target.dataset.date).toLocaleString();
                console.log(date);
            }
        })
        this.view.addEventListener('focus', e => {
            if (e.target.className === "fromInput") {
                // console.log(e.target.className)
                
                
            }
        })
        this.view.addEventListener('blur', e => {
            if (e.target.className === "fromInput") {
                // console.log(e.target.className)
                let calendar = e.target.closest('.calendar');
                calendar.classList.remove('.shown');
                console.log(calendar);
            }
        })
    }

    init() {
        this.render();
        this.initController();
    }
}