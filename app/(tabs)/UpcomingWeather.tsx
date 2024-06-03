import React from 'react'
import { FlatList, StyleSheet, Text, View, StatusBar, ImageBackground, ListRenderItem } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '@/components/ListItem';

interface WeatherItem {
    main: string
}

type X = () => number

interface Item {
    dt_text: string
    main: {
        temp_max: number
        temp_min: number
    }
    weather: Array<WeatherItem>
}

const DATA: Array<Item> = [
    {
        dt_text: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_text: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    },
    {
        dt_text: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
]


const UpcomingWeather = () => {
    const renderItem: ListRenderItem<Item> = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_text={item.dt_text} min={item.main.temp_min} max={item.main.temp_max}/>
    )

    const {container, image} = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('@/assets/images/upcoming-background.jpg')} style={image}>
                <Text>Upcoming Weather</Text>
                <FlatList 
                    data={DATA} 
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_text}
                    // ItemSeparatorComponent={() => <View style={{backgroundColor: 'gray', height: 2}}/>}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const x = {
    a: "a",
    b: {
        c: "c"
    }
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