export default class Header {
    static render(fromDate = new Date().toLocaleString(), toDate = '*') {
        return `
            <section class="header">
                <div class="choosenDateText">${fromDate} - ${toDate}</div>
            </section>
        `
    }

}