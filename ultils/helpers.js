const helpers = {
    isDay: (hour) => {       
    
        return hour >=6 && hour <=18;
    },
    formatTime: (time) => {
        let date = new Date(time);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let period = hours < 12 ? 'am' : 'pm';

        if(hours === 0) {
            hours = 12;
        } else if(hours > 12){
            hours-=12;
        }

        let formattedHours = hours < 10 ? '0' + hours : hours;
        let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

        return `${formattedHours}:${formattedMinutes}${period}`
    }
}


export default helpers;