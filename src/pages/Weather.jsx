import { useState, useEffect, useRef } from "react"
import logo from '../img/cloud.png';
import './Weather.scss';
import loupe from '../img/lupa.png';
import EachCity from "../components/EachCity";




function Wheather(){
    let Key ='31b693b81fc44337b87140759221901';
    let [auto, setAuto] = useState();
    let [value, setValue] = useState('Paris');
    let [data, setData] = useState();
    let ref = useRef();
    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=${Key}&q=Tashkent`)
        .then(res=>res.json())
        .then(data =>{
           setAuto(data);
        })       
    }, []);
    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/current.json?key=${Key}&q=${value}`)
        .then(res=>res.json())
        .then(data =>{
           setData(data);
           console.log(data)
        })       
    }, [value])
    

    return(
        <>
            
        <header className="header">
           <div className="container">
             <div className="header__wrapper">
             <div className="header__info">
               <img src={logo} alt="" className="header__logo" />
               <h1 className="header__title">Weather</h1>
            </div>
            <form action="" className="form" onSubmit={e=>{
                e.preventDefault()
                setValue(ref.current.value)
                
            }}>
                {/* <select name="chosen" id="" className="type">
                    <option value="current">Current</option>
                    <option value="forecast">Forecast</option>
                    <option value="astronomy">Astronomy</option>
                    <option value="sport">Sports</option>
                </select> */}
                <input ref={ref} type="text" className="city"/>
                <button className="search"><img src={loupe} alt="" /></button>
            </form>
            <div className="current">
                <h2 className="current__city">{`${auto?auto.location.name:''}.${auto?auto.location.country:""}`}</h2>
                <div className="current__condition">
                    <img className="current__condition-img" src={auto?auto.current.condition.icon:''} alt="icon" />
                    <span className="current__condition-text">{auto?auto.current.condition.text:''}</span>
                </div>
            </div>
             </div>
           </div>
        </header>
        <main className="main">
            <EachCity 
               current = {data?data.current:''}
               location ={data?data.location:''}
            />
        </main>
        </>
    )
}

export default Wheather;