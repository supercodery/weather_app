const api_Key="3730d11dc8d4f54e38f611743e9cd006"
const url_Api="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const search_box=document.querySelector('.search')
const weather_Icon=document.querySelector('.weather-icon')
async function checkWeather(city)
{
    const response = await fetch(url_Api+ city +`&appid=${api_Key}`);
    const data = await response.json();
    console.log(data);
    if(response.status==404)
    {
      
     document.querySelector('.error').style.display='block'
     document.querySelector('.weather-container').style.display="none"


    }
    else
    {
        document.querySelector('.temp').innerHTML=data.main.temp;
        document.querySelector('.place').innerHTML=data.name;
        document.querySelector('.humidity').innerHTML=data.main.humidity;
        document.querySelector('.wind').innerHTML=data.wind.speed+"Km/h";
        if(data.weather[0].main =='Clouds')
        {
            weather_Icon.src="./cloud/clouds.png"
        }
        else if(data.weather[0].main=='Clear')
        {
            weather_Icon.src="./cloud/clear.png"
        }
        else if(data.weather[0].main=='Rain')
        {
            weather_Icon.src="./cloud/rain.png"
        }
        else if(data.weather[0].main=='Drizzle')
        {
            weather_Icon.src="./cloud/drizzle.png"
        }
        else if(data.weather[0].main=='Mist')
        {
            weather_Icon.src="./cloud/mist.png"
        }
        else if(data.weather[0].main=='snow')
        {
            weather_Icon.src="./cloud/snow.png"
        }
        else
        {
            weather_Icon.src='./cloud/haze.png'
        }
        document.querySelector('.weather-container').style.display="block"
        document.querySelector('.error').style.display='none'
    }
   
     


}
document.querySelector('.search-btn').addEventListener('click',()=>
{
    checkWeather(search_box.value)
})


