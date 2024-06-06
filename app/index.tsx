import { View, StyleSheet} from 'react-native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useGetWeather } from '@/hooks/useGetWeather';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '@/components/Tabs';
import ErrorItem from '@/components/ErrorItem';

const App = () => {
  const {weather, errorMsg, loading} = useGetWeather();
  if (weather && !loading) {
    return (
      <NavigationContainer independent={true}>
        <Tabs weatherData={weather}/>
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.loading}>
        {errorMsg ? <ErrorItem /> : (<ActivityIndicator size={'large'} color={'blue'}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    justifyContent: 'center',
    flex: 1
  },
})

export default App
