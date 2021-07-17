import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, View, Text, StyleSheet,  } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Surattani', code: '84000'},
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },

   ]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather' , {zipCode: code})
    }}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>   {place}</Text>
            <Text style={styles.zipCode}>{code}    </Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){

const navigation = useNavigation()
 return (
    <View >
        
        <Text style={styles.main}> Weather forecast </Text>
        
        <FlatList 
            data={availableZipItems}
            keyExtractor={ item => item.code }
            renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        
    </View>
    );
}

const styles = StyleSheet.create({
    main: {
        
        textAlign: 'center',
        fontSize: 30,
        color: `#f0f8ff`,
        backgroundColor: `#000080`,
        width: '100%',
        height: '20%',
                
        
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#b0e0e6'
        
    },
    zipPlace: {
        flex: 1,
        fontSize: 25,
        color: `#800000`

    },
    zipCode: {
        flex: 0,
        fontSize: 25,
        color: `#800000`
        
    }

})