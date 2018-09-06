export default class Form {
    
    
    static render() {
        return `
            <div class="durationDropdown">
                <div class="inputWrapper">
                    <input type="text" class="durationInput" value="">
                    <i class="fa fa-chevron-down"></i>
                </div>
                <div class="optionWrapper">
                    <div class="durationDropdownItems">
                        ${Form.renderItems()}
                    </div>
                </div>
            </div>
            <div class="timezoneDropdown">
                <div class="inputWrapper">
                    <input type="text" class="timezoneInput" value="${Intl.DateTimeFormat().resolvedOptions().timeZone}">
                    <i class="fa fa-chevron-down"></i>
                </div>
                <div class="timezoneDropdownItems">
                    <!--In development-->
                </div>
            </div>
            <section class="fromToWrapper">
                <section>
                    <div>From</div>
                    <div class="inputWrapper">
                        <input type="text" class="fromInput">
                        <i class="fa fa-calendar-alt"></i>
                    </div>
                </section>
                <section>
                    <div>To</div>
                    <div class="inputWrapper">
                        <input type="text" class="toInput">
                        <i class="fa fa-calendar-alt"></i>
                    </div>
                </section>
            </section>
            <section class="calendarWrapper"></section>
            <section class="btnWrapper">
                    <button class="btn btnCancel">Cancel</button>
                    <button class="btn btnApply">Apply</button>
            </section>
            </div>
        `
    }

    static renderItems(str) {
        const state = {
            durationOptionList : ["Custom", "Today" , "Yesterday", "Last 7 days", "Last 30 days", "Last 90 days"]
        }
        return state.durationOptionList.map( item => {
            return `<div class="durOption ${str === item ? "selectedOption" : ''}">${item}</div>`
        }).join('')
    }

}
