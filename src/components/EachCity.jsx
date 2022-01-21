import './EachCity.scss' 
import high from '../img/high-temperatures.png';
import low from '../img/low-temperature.png';
import humidity from '../img/humidity.png';
import wind from '../img/wind-night.png';
import fog from '../img/fog.png';



function EachCity(props){
   const {location, current}=props
    console.log(location, current);
    let toRender;



    if(location&&current){
       
           toRender= <>
           <div className="container">
               <div className="city__header">
               <h2 className="city__name">{location.name} in {location.region} in {location.country}</h2>
               <span className="city__currentTime">{location.localtime}</span>
               </div>
               <div className="city__condition">
                   <img src={current.condition.icon} alt="" className="city__climate" />
                   <h3 className="city__condition-name">{current.condition.text}</h3>
               </div>
               <div className="city__statistics">
                   <div className="city__degree">
                       <img src={current.feelslike_c>0?high:low} alt="" className="degree__img" />
                       <div className="degree__wrapper">
                           <span className="celsius">{current.temp_c} C</span>
                           <span className="celsius">{current.temp_f}  F</span>
                       </div>
                       </div>
                       <div className="humidity__wrapper">
                           <img src={humidity} alt="" className="humidity__img" />
                           <span className="humidity__text">{current.humidity}</span>
                       </div>
                       <div className="humidity__wrapper">
                           <img src={wind} alt="" className="humidity__img" />
                           <span className="humidity__text">{current.wind_mph} mph</span>
                       </div>
                       <div className="humidity__wrapper">
                           <img src={fog} alt="" className="humidity__img" />
                           <span className="humidity__text">{current.vis_km} km</span>
                       </div>
                   
               </div>
           </div>
 
         </>
        
    }else{
        toRender=<div className="container"><p className='notFound'>Not Found :( </p> </div>
    }
    return toRender

}
export default EachCity