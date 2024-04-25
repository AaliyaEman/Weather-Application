import React from 'react';

const Weather = ({ weatherData, showWeather }) => {
    const getWeatherIconUrl = (iconCode) => {
        return `http://openweathermap.org/img/wn/${iconCode}.png` ;
    };

    return (
        <div>
            {showWeather && weatherData && weatherData.weather ? (
                <div className='w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-skyblue shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                    <div className='flex justify-between flex-wrap'>
                        <div className='w-full md:w-1/2 my-4 flex justify-between items-center'>
                            <div className='flex flex-col items-start justify-between h-full'>
                                <div>
                                    <p className='text-xl'>
                                        {weatherData.name}, ss
                                        {weatherData.sys.country}
                                    </p>
                                    <p className='text-sm'>
                                        {weatherData.weather[0].description}
                                    </p>
                                </div>
                                <div>
                                    <h1 className='text-6xl font-semibold'>
                                        {weatherData.main.temp.toFixed()} &deg;C
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 my-4 flex flex-col justify-between items-end'>
                            <div className='relative'>
                                <img 
                                    src={getWeatherIconUrl(weatherData.weather[0].icon)}
                                    alt=""
                                    className='w-[120px]'
                                />
                                {weatherData.name !== undefined ? (
                                    <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Feels like</p>
                                            <p className='font-bold w-20'>
                                                {weatherData.main.feels_like.toFixed()} &deg;C
                                            </p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Humidity</p>
                                            <p className='font-bold w-20'>
                                                {weatherData.main.humidity} %
                                            </p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Wind Speed</p>
                                            <p className='font-bold w-20'>
                                                {weatherData.wind.speed.toFixed()} KPH
                                            </p>
                                        </div>
                                        <div className='flex justify-between gap-x-8'>
                                            <p>Pressure</p>
                                            <p className='font-bold w-20'>
                                                {weatherData.main.pressure} hPa
                                            </p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Weather ;