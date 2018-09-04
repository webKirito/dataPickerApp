export default class Calendar {

    static switchMonthRight({month, year}) {
        ++month;
        if (month > 11) {
            month = 0;
            year++;
        }
        return {month, year};
    }
    
    static switchMonthLeft({month, year}) {
        --month;
        if (month < 1) {
            month = 11;
            year--;
        }
        return {month, year};
    }

    static render({month = 5, year = 2016}) {
        const test = document.querySelector('.test');
        const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const weekArr = ["Mon","Tues","Wed","Thu","Fri","Sat","Sun"];
        let daysInMounth = new Date(year, month + 1, 0).getDate();
        let numberOfWeeks = Math.trunc(daysInMounth / 7) + 1;
        let firstDayIndexInWeek = new Date(monthArr[month] + " " + 1 + " " + year).getDay();
        let list = [];
        let counter = 0;
        for (let i = 0 ; i < numberOfWeeks; i++) {
            list.push({});
            for (let j = 0 ; j < 7 ; j++) {
                if (j < firstDayIndexInWeek - 1 && i === 0) {
                    list[0][j] = `  `;
                } else if (j >= firstDayIndexInWeek - 1 && i === 0) {
                    list[0][j] = `${++counter}`;
                }
                if (counter < daysInMounth & i !== 0) {
                    list[i][j] = `${++counter}`;
                } else if (i !== 0) {
                    list[i][j] = `  `;
                } 
            }
        }
        console.log(list);
        let view = `<div class="calendar">
            <div class="navigation">
                <div class="btn prevBtn"><</div>
                <div class="title">${monthArr[month]},${year}</div>
                <div class="btn nextBtn">></div>
            </div>
            <div class="week">
                ${weekArr.map(day => {
                    return `<div>${day.toUpperCase()}</div>`
                }).join('')}
            </div>
            ${list.map(weekObj => {
                return `<div class="week">
                    ${Object.values(weekObj).map(day => {
                        return `<div class="day" data-date="${monthArr[month] + " " + day + " " + year}">${day}</div>`
                    }).join('')}
                </div>`
            }).join('')}
        </div>`;
        test.innerHTML = view;
        console.log(test);
    }
}