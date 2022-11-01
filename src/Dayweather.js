import React from 'react';
import './Dayweather.css';
function DaysList(props) {
  const days = props.days;
  const listDays = days.map((day) =>
    <>
      <div className='block-day'>
        <div className="which-day"><b>{day.Nday}</b></div>
        <div className='date-day' style={{"color":"grey"}}>{day.Dday}</div>
        <img src={day.Iday} alt="dayimg" width='150px'/>
        <div className='temp-day'><h2>{day.Tday}</h2></div>
        <div className='state-day' style={{"color":"grey"}}>{day.Sday}</div>
      </div>
    </>
  );
  return (
    <div>{listDays}</div>
  );
}
export default DaysList;