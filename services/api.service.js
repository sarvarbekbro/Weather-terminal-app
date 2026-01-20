import https from 'https'
import axios from 'axios'
import {getKeyValue , TOKEN_DICTIONARY} from './storage.service.js'
import dedent from 'dedent'
import chalk from 'chalk'

const getIcon = icon => {
    switch (icon.slice ( 0, -1)){
        case '01':
            return '☀️ '
        case '02':
            return '🌦 '
        case '03':
            return '☁️ '
        case '04':
            return '☁️ '
        case '09':
            return '🌧 '
        case '10':
            return '🌦 '
        case '11':
            return '🌩 '
         case '13':
            return ''
        case '50':
            return '🌫 '   
    }
}
const getWeather = async city => {
 
const token = process.env.TOKEN ?? await getKeyValue( TOKEN_DICTIONARY.token)
if(!token ){
    throw new Error ("API doesn't exist , -t [API_KEY] for saving token" )
}
const Response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params:{
        q: city,
        appid: token,
        lang: 'en',
        units: 'metric',
    }
})

 return Response.data
}

const printWeather =(response , icon) => {
    console.log(dedent`
     ${chalk.bgYellowBright('WEATHER')} City weather ${response.name}  
     ${icon } ${response.weather[0].description}
     Temperature: ${response.main.temp} (feels like ${response.feels_like})
     Humidity: ${response.main.humidity}
     Wind speed: ${response.wind.speed}
     
     `)
}

export {getWeather, printWeather, getIcon,}