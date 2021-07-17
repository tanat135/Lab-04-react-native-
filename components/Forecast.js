import React from "react"
import { View, Text , StyleSheet} from "react-native"

export default function Forecast(props) {
    return (
    <View style={styles.main} >
        
        <Text style={styles.text }>main</Text>
        <Text style={styles.data }>{props.main}</Text>
        <Text style={styles.text }>Country</Text>
        <Text style={styles.data }>{props.name} {props.country}</Text>
        <Text style={styles.text }>Description</Text>
        <Text style={styles.data }>{props.description}</Text>
        <Text style={styles.text }>{props.temp} °C </Text>
        
    </View>
    );
   }
   
   const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        
    },
    text: {
        fontSize: 25,
        color: `#7fffd4`
    },
    data:{
        fontSize: 20,
        color: '#fdf5e6'
    }
});
