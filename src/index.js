import './Style/Build/build.scss'
import App from './Components/App'
import Header from './Components/Header'
import Form from './Components/Form'
import Calendar from './Components/Calendar'

let app = new App({
    header : Header,
    form : Form,
    calendar : Calendar
})

app.init();

console.log(...[1,2,3])