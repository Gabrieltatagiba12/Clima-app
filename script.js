

const key ="8529a54efb585b552af5e79165e06082"


function screendatas(datas){
    document.querySelector(".city").innerHTML = "Tempo em " + datas.name
    document.querySelector(".temp").innerHTML = Math.floor(datas.main.temp) + "°C"
    document.querySelector(".prevision-text").innerHTML = datas.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + datas.main.humidity + "%"
    document.querySelector(".prevision-img").src = `https://openweathermap.org/img/wn/${datas.weather[0].icon}.png`


}



async function searchcity(city){

    const datas = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    screendatas(datas)
}


function buttonclick(){
    const city = document.querySelector(".input-city").value

    searchcity(city) 
}

