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
            <Text style={styles.data }>{props.temp} °C </Text>
        </View>
    
    );
   }
   
   const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        opacity: 0.9,
        height:'33%',
        width: '100%',
        display: "flex"
    },
    text: {
        fontSize: 20,
        color: `#ff7f50`
    },
    data:{
        fontSize: 17,
        color: '#fdf5e6'
    }
});
