// let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={3189537932cfaf5a398d190042192f4c}`
 


function getWeather(city){

    let apikey=`3189537932cfaf5a398d190042192f4c`

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    ).then((raw)=> raw.json() )
    .then(result=>{
        console.log(result)
    })
}

getWeather('London')