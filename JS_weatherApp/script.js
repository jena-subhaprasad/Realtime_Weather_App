
let loc=document.getElementById("location")
let tempimg=document.getElementById("temp-icon")
let tempval=document.getElementById("temp-value")
let climate=document.getElementById("climate")

let pressure=document.getElementById("press")
let humid=document.getElementById("humidity")

window.addEventListener("load",()=>{
    console.log("hello")
let lat
let long

if(navigator.geolocation)//give the location of device by making a promot
{
navigator.geolocation.getCurrentPosition((e)=>{

long=e.coords.longitude;
lat=e.coords.latitude;
const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bbd3e52b65b39043053dea720ecd2bf0`
 
fetch(api)
  .then((response)=>{return response.json()})
  .then((data)=>{
    // console.log(data);
  loc.textContent=data.name;
  climate.innerText=data.weather[0].main
  let id=data.weather[0].id
  console.log(id)
  tempval.textContent=Math.round(data.main.temp-273)
  pressure.innerText=`Pressure:${data.main.pressure} atm`
  humid.innerText=`Humidity:${data.main.humidity}%`

  if(id<300 && id>=200)
  {
      tempimg.src="./icons/thunderstorm.svg"
      document.body.style.backgroundImage="url('./wallpaper/thunder.jpg')"
  }
 else  if(id<400 && id>=300)
  {
      tempimg.src="./icons/cloud-solid.svg"
      document.body.style.backgroundImage="url('./wallpaper/misty.jpg')"

  }
 else if(id<600&& id>=500)
  {
      tempimg.src="./icons/rain.svg"
      document.body.style.backgroundImage="url('./wallpaper/rain.jpg')"
  }
 else  if(id<700 && id>=600)
  {
      tempimg.src="./icons/snow.svg"
      document.body.style.backgroundImage="url('./wallpaper/snow.jpg')"
  }
 else  if(id<800 && id>=700)
  {
      tempimg.src="./icons/clouds.svg"
      document.body.style.backgroundImage="url('./wallpaper/cloudy.jpg')"
  }
  else if(id===800)
  {
    tempimg.src="./icons/clouds-and-sun.svg"
    document.body.style.backgroundImage="url('./wallpaper/sunny.jpg')"
}
   else if(id>800)
  {
      tempimg.src="./icons/clouds-and-sun.svg"
      document.body.style.backgroundImage="url('./wallpaper/cloudsunny.jpg')"
  }



  })
})
}
})

let searchbtn=document.getElementById("search-button")

let searchtext=document.getElementById("search-input")

searchbtn.addEventListener('click',(e)=>{

e.preventDefault()
findweather(searchtext.value)
searchtext.value=''

});

const findweather=async(city)=>{
    try{
      const x= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbd3e52b65b39043053dea720ecd2bf0`)
   const data=await x.json()

   loc.textContent=data.name;
  climate.innerText=data.weather[0].main
  tempval.textContent=Math.round(data.main.temp-273)
  let id=data.weather[0].id
  console.log(id)
  pressure.innerText=`Pressure:${data.main.pressure} psa`
  humid.innerText=`Humidity:${data.main.humidity}%`


  if(id<300 && id>=200)
  {
      tempimg.src="./icons/thunderstorm.svg"
      document.body.style.backgroundImage="url('./wallpaper/thunder.jpg')"
  }
 else  if(id<400 && id>=300)
  {
      tempimg.src="./icons/cloud-solid.svg"
      document.body.style.backgroundImage="url('./wallpaper/misty.jpg')"

  }
 else if(id<600&& id>=500)
  {
      tempimg.src="./icons/rain.svg"
      document.body.style.backgroundImage="url('./wallpaper/rain.jpg')"
  }
 else  if(id<700 && id>=600)
  {
      tempimg.src="./icons/snow.svg"
      document.body.style.backgroundImage="url('./wallpaper/snow.jpg')"
  }
 else  if(id<800 && id>=700)
  {
      tempimg.src="./icons/clouds.svg"
      document.body.style.backgroundImage="url('./wallpaper/cloudy.jpg')"
  }
  else if(id===800)
  {
    tempimg.src="./icons/clouds-and-sun.svg"
    document.body.style.backgroundImage="url('./wallpaper/sunny.jpg')"
}
   else if(id>=800)
  {
      tempimg.src="./icons/clouds-and-sun.svg"
      document.body.style.backgroundImage="url('./wallpaper/cloudsunny.jpg')"
  }


    }
    catch(error)
    {
        alert('City not found,Please enter a valid city');
    }
    


}
