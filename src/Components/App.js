export default class App {
    constructor(componentsObj) {
        this.date = new Date();
        this.monthArr =  ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.state = {
            day : this.date.getDay(),
            month : this.date.getMonth(),
            year : this.date.getFullYear(),
            calendarIsShown : false,
            calendarCaller: '',
            currentDay : `${this.monthArr[this.date.getMonth()] + " " + (this.date.getDay() + 2) + " " + this.date.getFullYear()}`,
            lowerDateBorder : 0,
            upperDateBorder : Number.POSITIVE_INFINITY
        };
        this.components = componentsObj;
        this.view = document.querySelector('.app');
    }

    render() {
        this.view.innerHTML = '';
        for (let compKey in this.components) {
            if (compKey === 'calendar') {
                this.components[compKey].render({month : this.state.month, year : this.state.year, currentDay : this.state.currentDay});
            } else {
                this.view.innerHTML += this.components[compKey].render();
            }
        }
    }

    setState(obj) {
        this.state = {...this.state,...obj};
    }

    renderComponent(key, params = null) {
        this.components[key].render(params);
    }

    initController() {
        this.view.addEventListener('click', (e) => {
            if (e.target.className === "fromInput") {
                let calendar = document.querySelector('.calendar');
                this.setState({
                    calendarCaller : '.fromInput',
                    calendarIsShown : true
                })
                this.renderComponent('calendar', {
                    ...this.state, 
                    caller : this.state.calendarCaller,
                    lowerDateBorder : this.state.lowerDateBorder,
                    upperDateBorder : this.state.upperDateBorder
                })
            }
            if (e.target.className === "toInput") {
                let calendar = document.querySelector('.calendar');
                this.setState({
                    calendarCaller : '.toInput',
                    calendarIsShown : true
                })
                this.renderComponent('calendar', {
                    ...this.state, 
                    caller : this.state.calendarCaller,
                    lowerDateBorder : this.state.lowerDateBorder,
                    upperDateBorder : this.state.upperDateBorder
                })
            }
            if (e.target.classList.contains('prevBtn')) {
                this.setState({
                    ...this.components['calendar'].switchMonthLeft({
                        month : this.state.month, 
                        year : this.state.year
                    }),
                    calendarIsShown : true,
                    currentDay : this.state.currentDay
                })
                this.renderComponent('calendar' , {...this.state});
            }
            if (e.target.classList.contains('nextBtn')) {
                this.setState({
                    ...this.components['calendar'].switchMonthRight({
                        month : this.state.month, 
                        year : this.state.year
                    }),
                    calendarIsShown : true,
                    currentDay : this.state.currentDay
                })
                this.renderComponent('calendar' , {...this.state});
            } 
            if (e.target.classList.contains('day')) {
                let date = new Date(e.target.dataset.date).toLocaleString();
                document.querySelector(this.state.calendarCaller).value = date;

                if (this.state.calendarCaller === '.fromInput') {
                    this.setState({
                        lowerDateBorder : new Date(e.target.dataset.date).getTime()
                    })
                } else {
                    this.setState({
                        upperDateBorder : new Date(e.target.dataset.date).getTime()
                    })
                }
                
                this.setState({
                    calendarIsShown : false
                });
                this.renderComponent('calendar' , {...this.state, calendarIsShown : this.state.calendarIsShown});
                
                console.log(date);
            }
        })
    }

    init() {
        this.render();
        this.initController();
    }
}