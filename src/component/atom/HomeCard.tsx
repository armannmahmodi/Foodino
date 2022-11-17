import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Image } from 'native-base';
import image from '~/assets/image';
import { fontFamily } from '~/utils/Style';

export default function HomeCard() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { }} style={styles.touchableOpacity} >
                <Image source={image.pizza} w='100%' h='100%' alt="image" alignSelf='center' borderRadius='20' />
            </TouchableOpacity >
            <Text style={styles.textCard}>Burgers Story</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 4,
        paddingBottom: 10,

    },
    textCard: {
        fontFamily: fontFamily.bold,
        fontSize: 18,

        marginLeft: 5
    },
    touchableOpacity: {
        height: 210,
        width: 385,
        margin: 1,
        marginTop: 2,
        alignSelf: 'center'
    }
})