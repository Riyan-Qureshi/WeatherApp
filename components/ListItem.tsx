import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import { weatherType } from '@/utilities/weatherType';
import moment from 'moment';

const ListItem = (props: any) => {
    const { dtText, min, max, weatherCondition } = props;
    const { item, temp, date, dateTextWrapper } = styles;
    const weatherCondKey = weatherCondition as keyof typeof weatherType
    return (
        <View style={item}>
            <Feather name={weatherType[weatherCondKey].icon} size={50} color={'white'}/>
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dtText).format('dddd')}</Text>
                <Text style={date}>{moment(dtText).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    dateTextWrapper: {
        flexDirection: 'column'
    }
})

export default ListItem