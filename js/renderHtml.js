import {getWeather} from "./getWeather.js";
import {deg, cityBottom, forecastImg, imgUrl} from "./globalConst.js";

export function renderHtml () {
    getWeather()
        .then(result => {
            if(result !== undefined) {
                let mainInfo = result.main
                let mainIcon = result.weather[0]
                let oneKelvin = Number(273,15)
                let temp = Number(mainInfo.temp)
                let temperature = temp - oneKelvin
                let mainImg = `<img src="${imgUrl}${mainIcon.icon}@2x.png">`
                deg.textContent = Math.floor(temperature)
                cityBottom.textContent = result.name
                forecastImg.innerHTML = mainImg
            }

        })
}
