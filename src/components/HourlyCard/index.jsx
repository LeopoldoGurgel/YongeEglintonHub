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

import React, {useState, useEffect} from 'react';
import helpers from '../../../ultils/helpers';

const HourlyCard = ({code, temp, time}) => {    
    const [ curIcon, setCurIcon ] =useState(null);
    const [ backColor , setBackColor ] = useState('');

    const isDay = helpers.isDay;
    const formatTime = helpers.formatTime;
    

    useEffect(() => {
        if(code == 1 || code == 0) {
            if(isDay(time)) {
                setCurIcon(`WiDaySunny`);
                setBackColor('text-bg-primary hourlyCard')
            } else {
                setCurIcon(`WiNightClear`);
                setBackColor('text-bg-dark hourlyCard');            
            }
        };
        //changes weather icon
        if(code==3){
            if(isDay(time)) {
                setCurIcon(`WiCloudy`);
                setBackColor('text-bg-secondary hourlyCard')
            } else {
                setCurIcon(`WiCloudy`);
                setBackColor('text-bg-dark hourlyCard');            
            }
        };
        //changes weather icon
        if(code==2){
            if(isDay(time)) {
                setCurIcon(`WiDayCloudy`);
                setBackColor('text-bg-secondary hourlyCard')
            } else {
                setCurIcon(`WiNightCloudy`);
                setBackColor('text-bg-dark hourlyCard');          
            }
        };
        //changes weather icon
        if(code==51 ||
            code==53 ||
            code==55 ||
            code==56 ||
            code==57) {
            setCurIcon(`WiSandstorm`)
            if(isDay(time)) {
                setBackColor('text-bg-light hourlyCard')
            } else {
                setBackColor('text-bg-dark hourlyCard');          
            }
        };
        //changes weather icon
        if(code==45 ||
            code==48) {
                setCurIcon(`WiFog`)
                if(isDay(time)) {setBackColor('text-bg-light hourlyCard')}
                else{setBackColor('text-bg-dark hourlyCard')}
        };
        //changes weather icon
        if(code==61 ||
            code==63 ||
            code==66 ||
            code==80 ||
            code==81) {
            setCurIcon(`GiRaining`)
            if(isDay(time)) {setBackColor('text-bg-secondary hourlyCard')}
                else{setBackColor('text-bg-dark hourlyCard')}
        };
        //changes weather icon
        if(code==65 ||
            code==67 ||
            code==82 ||
            code==95 ||
            code==99 ||
            code==96) {
            setCurIcon(`GiHeavyRain`)
            if(isDay(time)) {setBackColor('text-bg-secondary hourlyCard')}
                else{setBackColor('text-bg-dark hourlyCard')}
        };
        //changes weather icon
        if(code==71 ||
            code==73 ||
            code==75 ||
            code==77 ||
            code==85 ||
            code==86) {
            setCurIcon(`GiSnowing`)
            if(isDay(time)) {setBackColor('text-bg-secondary hourlyCard')}
                else{setBackColor('text-bg-dark hourlyCard')}
        };
    }), [code, temp, time]

    

    return(
        <div className={`pt-1 pb-1 ${backColor}`}>

            <div>{formatTime(time)}</div>
            
            {curIcon == `WiDaySunny` && <WiDaySunny className="currentIcon"/>}
            {curIcon == `WiNightClear` && <WiNightClear className="currentIcon"/>}
            {curIcon == `WiCloudy` && <WiCloudy className="currentIcon"/>}
            {curIcon == `WiDayCloudy` && <WiDayCloudy className="currentIcon"/>}
            {curIcon == `WiNightCloudy` && <WiNightCloudy className="currentIcon"/>}
            {curIcon == `WiSandstorm` && <WiSandstorm className="currentIcon"/>}
            {curIcon == `WiFog` && <WiFog className="currentIcon"/>}
            {curIcon == `GiRaining` && <GiRaining className="currentIcon"/>}
            {curIcon == `GiHeavyRain` && <GiHeavyRain className="currentIcon"/>}
            {curIcon == `GiSnowing` && <GiSnowing className="currentIcon"/>}

            <div>{temp}°C</div>
            
        </div>
    )
}

export default HourlyCard;