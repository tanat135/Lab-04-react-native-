
import React, { useState, useEffect } from "react"
import { View, Text, ImageBackground, StyleSheet,  } from "react-native"
import Forecast from "./Forecast";


export default function Weather(props) {
useEffect(() => {
    console.log(`fetching data with zipCode = ${props.zipCode}`)
    if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f92242a2fa4179462b20c5fabac5d60d`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    name: json.name,
                    country: json.sys.country,
                    description: json.weather[0].description,
                    temp: json.main.temp});
        })
        .catch((error) => {
            console.warn(error);
        });
    }
}, [props.zipCode])
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <Text></Text>
                <Text style={styles.text}> Zip Code is {props.zipCode}</Text>
                <Text></Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
    );
   }
   
   const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
    },
    text: {
        fontSize: 30,
        color: '#fdf5e6'
    }
});
   
   