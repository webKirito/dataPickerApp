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

    static getNumberOfWeeks(month, year, daysNumber) {
        let numberOfWeeks = 0;
        let startDay = 0;
        for (let i = 1 ; i < daysNumber; i++) {
            let dayOfWeek = new Date(year, month, i).getDay();
            if (dayOfWeek === startDay) {
                numberOfWeeks++;
            }
        }
        return numberOfWeeks;
    }

    static render({month = 5, year = 2016, calendarIsShown = false, caller = '', currentDay = '', lowerDateBorder = 0, upperDateBorder = Number.POSITIVE_INFINITY }) {
        const test = document.querySelector('.test');
        const monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const weekArr = ["Mon","Tues","Wed","Thu","Fri","Sat","Sun"];
        let daysInMounth = new Date(year, month + 1, 0).getDate();
        let firstDayIndexInWeek = new Date(monthArr[month] + " " + 1 + " " + year).getDay();
        let numberOfWeeks = Math.ceil((daysInMounth + firstDayIndexInWeek) / 7);
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
        console.log("Calendar is shown", calendarIsShown, "Number of days", daysInMounth);
        let view = `<div class="calendar" style="display:${Calendar.calendarVisibility(calendarIsShown)}">
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
                        let dayInStr = `${monthArr[month] + " " + day + " " + year}`;
                        return `<div class="day ${Calendar.curentDayStyle(dayInStr, currentDay)} ${Calendar.daysOutOfBorderStyle(lowerDateBorder, upperDateBorder, dayInStr)}" data-date="${dayInStr}">${day}</div>`
                    }).join('')}
                </div>`
            }).join('')}
        </div>`;
        test.innerHTML = view;
        console.log(test);
    }
    static calendarVisibility(bool) {
        return bool ? 'flex' : 'none';
    } 
    static curentDayStyle(d1, d2) {
        return d1 == d2 ? "currentDay" : '';
    }
    static daysOutOfBorderStyle(b1 , b2, currentDayText) {
        let currentDayInMs = new Date(currentDayText).getTime();
        return (currentDayInMs < b1 & currentDayInMs > b2) ? "notActiveDay" : "activeDay";
    }
}