const apiKey="bf1fd349607c908b1bdff79ed204781c";

const apiUrl=`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl +city );

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

    var data = await response.json();

    console.log(data);
    // var name =data.name;
     
    // if(data.name="undefined"){
    //     document.querySelector(".city").innerHTML="Invalid City name!";
    // }else{
    //     document.querySelector(".city").innerHTML=data.name;
    // }
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + " Km/h";

    let condition =data.weather[0].main;
    weatherIcon.src=`./images/${condition}.png`;
    // if(data.weather[0].main=="Clouds"){
    //     weatherIcon.src="./images/Clouds.png";
    // } else if(data.weather[0].main=="Clear"){
    //     weatherIcon.src="./images/Clear.png";
    // }else if(data.weather[0].main=="Rain"){
    //     weatherIcon.src="./images/Rain.png";
    // }else if(data.weather[0].main=="Drizzle"){
    //     weatherIcon.src="./images/Drizzle.png";
    // }else if(data.weather[0].main=="Mist"){
    //     weatherIcon.src="./images/Mist.png";
    // }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
