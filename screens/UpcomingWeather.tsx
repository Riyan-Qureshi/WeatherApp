import React from 'react'
import { FlatList, StyleSheet, StatusBar, ImageBackground, ListRenderItem } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '@/components/ListItem';
import { WeatherData } from '../types';

interface UpcomingWeatherProps {
    weatherData: WeatherData[]
}

const UpcomingWeather = (props: UpcomingWeatherProps) => {
    const weatherData = props.weatherData
    const renderItem: ListRenderItem<WeatherData> = ({item}) => (
        <ListItem condition={item.weatherCondition} dtText={item.dtText} min={item.tempMin} max={item.tempMax} weatherCondition={item.weatherCondition}/>
    )
    const {container, image} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('@/assets/images/upcoming-background.jpg')} style={image}>
                <FlatList 
                    data={weatherData} 
                    renderItem={renderItem}
                    keyExtractor={item => item.dtText}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'gray'
    },
    image: {
       flex: 1
    }
})

export default UpcomingWeather;