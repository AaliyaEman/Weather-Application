import axios from 'axios';
import React, { useState } from 'react';
import Weather from './Weather';

function Weatherapp() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState("");
    const [showWeather, setShowWeather] = useState(false);
    const API_KEY = "b3914c2d17f38d1cdecc3db3c1ad8c84";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;


    const searchLocation = () => {
        if (location.trim() !== "") {
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                    setShowWeather(true); // Set showWeather to true
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
            setLocation("");
        }
    };

    return (
        <div className='w-full h-full relative bg-black'>
            <div className='absolute top-0 left-0 w-20 h-20 rounded-br-full bg-skyblue'></div>
            <div className='absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-skyblue'></div>
            <div className='text-center p-4'>
                <h1 className='text-white text-4xl pt-16 mb-4'>WEATHER APP</h1>
                <input 
                    type='text' 
                    className='py-3 px-6 w-full md:w-[500px] lg:w-[700px] text-lg
                     rounded-3xl border border-gray-200 
                     text-gray-600 placeholder:text-gray-400 
                     focus:outline-none bg-white/100 shadow-md' 
                    placeholder='Enter Location' 
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
              
            </div>
            <div className="text-center mt-4"> {/* Added margin-top to create space */}
                <button 
                    className="px-4 py-2 bg-skyblue rounded-lg text-black"
                    onClick={searchLocation}
                >
                    Get Weather
                </button>
            </div>
            <div className='py-5'>
                <Weather weatherData={data} showWeather={showWeather} />
            </div>
        </div>
    );
}

export default Weatherapp;