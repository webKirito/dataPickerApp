import Calendar from './Calendar'
export default class Header {
    static render(fromDate = Calendar.getNiceDayTxt(), toDate = 'Choose any date') {
        return `
            <section class="header">
                <div class="choosenDateText">${fromDate} - ${toDate}</div>
                <i class="fa fa-calendar-alt"></i>
            </section>
        `
    }

}