function getCity() {
    return prompt("Where are you?", "");
}

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ getCity() +"&units=imperial&APPID=91d1c3a6a26bf1ae9933621f408cb994",
    (data) => {

        let weatherIconURL = "https://api.openweathermap.org/img/w/";
        let weatherIcon =  `${weatherIconURL}${data.weather[0].icon}.png`;
        let weatherStatus = data.weather[0].main;
        let currentLocation = data.name;
        let tempFarenheit = Math.floor(data.main.temp);
        let date = new Date();
        // let formattedTime = `${timeNow.getDate()}`;
        
        $(".weather__icon").attr("src", weatherIcon);
        $(".weather__status").append(`${weatherStatus} in ${currentLocation}`);
        $(".temp").append(`${tempFarenheit}°F`);
        $(".current-time").append(
            `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
            ${date.getHours()}:${date.getMinutes()}
            `
        );

        console.log(Date($.now()));
    }
)