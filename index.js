import getArgs from "./helpers/args.js"
import { getWeather, printWeather, getIcon } from "./services/api.service.js"
import { saveKeyValue,  TOKEN_DICTIONARY, getKeyValue  } from "./services/storage.service.js"
import { printError, printSuccess, printHelp, } from "./services/log.service.js"



const saveToken = async token => {
    if (!token.length){
        printError('Token doesnt exist')
        return
    }
    try {
         await saveKeyValue ( TOKEN_DICTIONARY.token, token)
         printSuccess ('Token was saved successfully')
    } catch (error) {
        printError(error.message)
    }
   
}
const saveCity = async city => {
    if (!city.length){
        printError('City doesnt exist')
        return
    }
    try {
         await saveKeyValue ( TOKEN_DICTIONARY.city, city)
         printSuccess ('City  was saved successfully')
    } catch (error) {
        printError(error.message)
    }
   
}



const getForcast = async () => {
  try {
    const city =
      (await getKeyValue(TOKEN_DICTIONARY.city)) ??
      process.env.CITY

    if (!city) {
      throw new Error('City is not set')
    }

    const response = await getWeather(city)

    printWeather(response ,getIcon(response.weather[0].icon))

  } catch (error) {
    if (error?.response?.status === 404) {
      printError('City not found')
    } else if (error?.response?.status === 401) {
      printError('Invalid token')
    } else {
      printError(error.message)
    }
  }
}

const startCLI = () => {
    const args = getArgs(process.argv)
  
    if (args.h){
     return   printHelp()
        //help
    }

    if (args.s){
      return  saveCity(args.s)
    }

    if (args.t){
      return  saveToken(args.t)
    }
  return getForcast() 
}
startCLI()

