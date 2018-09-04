export default class Form {
    static render() {
        return `
            <input type="text" class="durationInput">
            <input type="text" class="timezoneInput">
            <section class="fromToWrapper">
                <section>
                    <div>From</div>
                    <input type="text" class="fromInput">
                </section>
                <section>
                    <div>To</div>
                    <input type="text" class="toInput">
                </section>
            </section>
            <section class="test"></section>
            <section class="btnWrapper">
                    <button class="btn btnCancel">Cancel</button>
                    <button class="btn btnApply">Apply</button>
            </section>
            </div>
        `
    }

}
