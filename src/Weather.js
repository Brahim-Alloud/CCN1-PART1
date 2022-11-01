import DaysList from './Dayweather';
import clear_sky from "./clear-sky.png";
import light_rain from "./light-rain.png";
import scattered_clouds from "./scattered-clouds.png";
import broken_clouds from "./broken-clouds.png";
import './Weather.css';
const days = [{Nday:"Friday",Dday:"March 1st, 1:00 pm",Tday:"35 °F",Iday:clear_sky,Sday:"clear sky"},{Nday:"Saturday",Dday:"March 2nd, 1:00 pm",Tday:"36 °F",Iday:light_rain,Sday:"light rain"},{Nday:"Sunday",Dday:"March 3rd, 1:00 pm",Tday:"36 °F",Iday:broken_clouds,Sday:"broken clouds"},{Nday:"Monday",Dday:"March 4th, 1:00 pm",Tday:"34 °F",Iday:clear_sky,Sday:"clear sky"},{Nday:"Tuesday",Dday:"March 5th, 1:00 pm",Tday:"26 °F",Iday:scattered_clouds,Sday:"scattered clouds"}];

function Weather() {
  return (
    <>
      <div id='city'>New York, US</div>
      <div id="days">
        <DaysList days={days} />
      </div>
    </>
  );
}

export default Weather;


