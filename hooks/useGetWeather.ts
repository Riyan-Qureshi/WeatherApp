import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { WeatherData } from '@/types';

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_VALUEWEATHER_API_KEY

const parseData = (data: any): Array<WeatherData> => {
    try {
        return (data.list.map((el) => {
            const {temp, feels_like, temp_min, temp_max} = el.main
            const {main, description} = el.weather[0]
            const dt_txt = el.dt_txt
            const population = data.city.population
            const country = data.city.country
            const city = data.city.name
            return {
                temp,
                feelsLike: feels_like, 
                tempMin: temp_min, 
                tempMax: temp_max, 
                weatherCondition: main, 
                description, 
                dtText: dt_txt,
                population,
                country,
                city
            }
        }))
    } catch(error) {
        const err = new Error(`Unable to parse WeatherData: ${error}`)
        console.log(err)
        throw err
    }
}

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const [weather, setWeather] = useState<Array<WeatherData>>([]);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
  
    const fetchWeatherData = async () => {
        try {
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            )
            const data = await res.json();
            const parsedData = parseData(data)
            setWeather(parsedData);
            // console.log(parsedData)
        } catch (errorMsg) {
            setErrorMsg('Could not fetch weather');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        fetchWeatherData();
        })();
    }, [lat, lon]);

    return {loading, errorMsg, weather};
}