import './weather.css'
// import apiResponse from '../../../devFiles/openMeteo-response.json';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import helpers from '../../../ultils/helpers';
import HourlyCard from '../HourlyCard';

//Icons
//ClearWeather (code 0), mainlyClear(1) 
import {WiDaySunny, WiNightClear,
    //partlyCloudy(2), Overcast(3)
    WiCloudy, WiDayCloudy, WiNightCloudy,
    // Drizzle (51, 53, 55, 56, 57)
    WiSandstorm,
    //fog (45, 48)
    WiFog
} from 'react-icons/wi'
//rain slight (61, 66, 80) moderate (63, 81) heavy (65, 67, 82, 95, 96, 99)
import {GiRaining, GiHeavyRain,
    //snow (71,73, 75, 77, 85, 86)
    GiSnowing
} from 'react-icons/gi'



const WeatherComponent = () => {

    const [ currentWeather, setCurrentWeather ] = useState(null);
    const [ currentIcon, setCurrentIcon ] =useState(null);
    const [ backgroundColor , setBackgroundColor ] = useState('');
    const [ apiResponse, setApiResponse ] = useState(null)
        
    const isDay = helpers.isDay;

    useEffect(()=>{
        const fetchData = async() => {
            try{
                const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.706&longitude=-79.398&current=temperature_2m,precipitation,weather_code&hourly=temperature_2m,precipitation_probability,precipitation,weather_code&timezone=America%2FNew_York');
                setApiResponse(response.data)
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        fetchData();
    }, [])  

    
    useEffect(() => {        

        
        setCurrentWeather(apiResponse?.current);
              
        //changes weather icon
        if(apiResponse?.current.weather_code == 1 || apiResponse?.current.weather_code == 0) {
            if(isDay(new Date().getHours())) {
                setCurrentIcon(`WiDaySunny`);
                setBackgroundColor('text-bg-primary')
            } else {
                setCurrentIcon(`WiNightClear`);
                setBackgroundColor('text-bg-dark');            
            }
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==3){
            if(isDay(new Date().getHours())) {
                setCurrentIcon(`WiCloudy`);
                setBackgroundColor('text-bg-secondary')
            } else {
                setCurrentIcon(`WiCloudy`);
                setBackgroundColor('text-bg-dark');            
            }
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==2){
            if(isDay(new Date().getHours())) {
                setCurrentIcon(`WiDayCloudy`);
                setBackgroundColor('text-bg-secondary')
            } else {
                setCurrentIcon(`WiNightCloudy`);
                setBackgroundColor('text-bg-dark');          
            }
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==51 ||
            apiResponse?.current.weather_code==53 ||
            apiResponse?.current.weather_code==55 ||
            apiResponse?.current.weather_code==56 ||
            apiResponse?.current.weather_code==57) {
            setCurrentIcon(`WiSandstorm`)
            if(isDay(new Date().getHours())) {
                setBackgroundColor('text-bg-light')
            } else {
                setBackgroundColor('text-bg-dark');          
            }
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==45 ||
            apiResponse?.current.weather_code==48) {
                setCurrentIcon(`WiFog`)
                if(isDay(new Date().getHours())) {setBackgroundColor('text-bg-light')}
                else{setBackgroundColor('text-bg-dark')}
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==61 ||
            apiResponse?.current.weather_code==63 ||
            apiResponse?.current.weather_code==66 ||
            apiResponse?.current.weather_code==80 ||
            apiResponse?.current.weather_code==81) {
            setCurrentIcon(`GiRaining`)
            if(isDay(new Date().getHours())) {setBackgroundColor('text-bg-secondary')}
                else{setBackgroundColor('text-bg-dark')}
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==65 ||
            apiResponse?.current.weather_code==67 ||
            apiResponse?.current.weather_code==82 ||
            apiResponse?.current.weather_code==95 ||
            apiResponse?.current.weather_code==99 ||
            apiResponse?.current.weather_code==96) {
            setCurrentIcon(`GiHeavyRain`)
            if(isDay(new Date().getHours())) {setBackgroundColor('text-bg-secondary')}
                else{setBackgroundColor('text-bg-dark')}
        };
        //changes weather icon
        if(apiResponse?.current.weather_code==71 ||
            apiResponse?.current.weather_code==73 ||
            apiResponse?.current.weather_code==75 ||
            apiResponse?.current.weather_code==77 ||
            apiResponse?.current.weather_code==85 ||
            apiResponse?.current.weather_code==86) {
            setCurrentIcon(`GiSnowing`)
            if(isDay(new Date().getHours())) {setBackgroundColor('text-bg-secondary')}
                else{setBackgroundColor('text-bg-dark')}
        };
    }, [apiResponse])

    return (
        <div id="weatherComponent" className='col-12'>            
                
                <div id="currentWeather" className={backgroundColor}>

                        {currentIcon == `WiDaySunny` && <WiDaySunny className="currentIcon"/>}
                        {currentIcon == `WiNightClear` && <WiNightClear className="currentIcon"/>}
                        {currentIcon == `WiCloudy` && <WiCloudy className="currentIcon"/>}
                        {currentIcon == `WiDayCloudy` && <WiDayCloudy className="currentIcon"/>}
                        {currentIcon == `WiNightCloudy` && <WiNightCloudy className="currentIcon"/>}
                        {currentIcon == `WiSandstorm` && <WiSandstorm className="currentIcon"/>}
                        {currentIcon == `WiFog` && <WiFog className="currentIcon"/>}
                        {currentIcon == `GiRaining` && <GiRaining className="currentIcon"/>}
                        {currentIcon == `GiHeavyRain` && <GiHeavyRain className="currentIcon"/>}
                        {currentIcon == `GiSnowing` && <GiSnowing className="currentIcon"/>}
                        
                    
                    <div className="currentInfo">
                        <div>Temperature: {currentWeather?.temperature_2m}°C</div>
                        <div>Pecipitation: {currentWeather?.precipitation}mm </div>
                    </div>
                </div>
                
                <div id="hourlyWeather" className=' '>
                    
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours()]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours()]} time={apiResponse?.hourly.time[new Date().getHours()]} />
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours() +1]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours() +1]} time={apiResponse?.hourly.time[new Date().getHours() +1]} />
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours() +2]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours() +2]} time={apiResponse?.hourly.time[new Date().getHours() +2]} />
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours() +3]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours() +3]} time={apiResponse?.hourly.time[new Date().getHours() +3]} />
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours() +4]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours() +4]} time={apiResponse?.hourly.time[new Date().getHours() +4]} />
                    <HourlyCard code={apiResponse?.hourly.weather_code[new Date().getHours() +5]} temp={apiResponse?.hourly.temperature_2m[new Date().getHours() +5]} time={apiResponse?.hourly.time[new Date().getHours() +5]} />


                </div>

                      
        </div>
    )
}


export default WeatherComponent;