import React, { useState } from 'react'
import { HStack, VStack, Text, Button } from 'native-base'
import { View, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'native-base';
import image from '~/assets/image';
import { CustomButton } from '~/component'
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style'
export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard() {
    const [cart, setCart] = useState(0);

    const cartPlus = () => {
        setCart(prevState => prevState + 1)
    };
    const cartMinus = () => {
        if (cart > 0) {
            setCart(prevState => prevState - 1)
        }
    }

    return (
        <HStack h='200' w='420' direction='row-reverse' alignItems='center' justifyContent='space-between' borderTopWidth='0.5' borderTopColor={Colors.GARY_4}>
            <VStack space='2' pr='2' >
                <Text>غذا</Text>
                <Text>قیمت</Text>
            </VStack>
            <VStack space='2' paddingLeft='2' >
                <Image source={image.pizza} w='100' h='100' borderRadius='10' alt='image' />
                <HStack width='100' justifyContent='space-between'>
                    <CustomButton title='-' onPress={cartMinus} style={{ width: 27 }} />
                    <Text style={styles.text}>{cart}</Text>
                    <CustomButton title='+' onPress={cartPlus} style={{ width: 27 }} />
                </HStack>

            </VStack>
        </HStack>

    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlignVertical: 'center',
        color: Colors.GARY_1,
        fontFamily: fontFamily.number

    }
});

