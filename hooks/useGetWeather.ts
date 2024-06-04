import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weather, setWeather] = useState([]);
    const [lat, setLat] = useState([]);
    const [lon, setLon] = useState([]);
  
    const fetchWeatherData = async () => {
        try {
        const res = await fetch('http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_VALUEWEATHER_API_KEY}');
        const data = await res.json();
        setWeather(data);
        } catch (errorMsg) {
        setErrorMsg('Could not fetch weather');
        } finally {
        setLoading(false);
        }
    }

    // console.log(process.env.EXPO_PUBLIC_VALUETEST_KEY);
    // console.log(lat);
    // console.log(lon);

    useEffect(() => {
        ;(async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLat(location.coords.latitude);
        setLon(location.coords.longitude);
        await fetchWeatherData();
        })();
    }, [lat, lon]);

    return [loading, errorMsg, weather];
}