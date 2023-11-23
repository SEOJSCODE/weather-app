import {deg, inputForm, inputValue, cityBottom} from "./globalConst.js";
import {renderHtml} from "./renderHtml.js"
inputForm.addEventListener('submit', showForecast)

function showForecast (event) {
    event.preventDefault()
    renderHtml()
}



