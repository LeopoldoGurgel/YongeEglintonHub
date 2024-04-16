import './sideGroup.css'
import WeatherComponent from '../WeatherComponent';
import SportsComponent from '../SportsComponent';
import EntertainmentComponent from '../EntertainmentComponent';

const SideGroupComponent = () => {
    return (
        <div id="sideGroup" className="col-12 col-lg-5 row container-fluid">
            <WeatherComponent />
            <SportsComponent />
            <EntertainmentComponent />
        </div>
    )
}

export default SideGroupComponent;