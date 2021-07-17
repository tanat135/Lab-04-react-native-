import React from "react"
import { View, Text } from "react-native"

export default function Forecast(props) {
    return (
    <View >
        <Text>main</Text>
        <Text>{props.main}</Text>
        <Text></Text>
        <Text>Country</Text>
        <Text>{props.name} {props.country}</Text>
        <Text></Text>
        <Text>Description</Text>
        <Text>{props.description}</Text>
        <Text></Text>
        <Text>{props.temp} °C </Text>
    </View>
    );
   }
   
