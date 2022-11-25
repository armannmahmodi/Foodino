import { HStack, Image, Text, VStack } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { CustomButton } from '~/component';
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style';
import { usePostFoodCart } from '~/hooks'
export const WIDTH = Dimensions.get('window').width / 4;

export default function FoodMenuCard({ item }: { item: any }) {

    const [cart, setCart] = useState(item?.number);
    const { mutate } = usePostFoodCart();

    const handleUserLogin = (formData: any) => {
        mutate(formData, {
            onSuccess: (data) => {
                console.log('success data =>', data.data)

            },
            onError: (error) => {
                console.log('login error =>', error)
            }
        })
    }

    const cartPlus = () => {
        setCart(prevState => prevState + 1);
        console.log('item>>>>>>>', item)
        handleUserLogin(item);

    };
    const cartMinus = () => {
        if (cart > 0) {
            setCart(prevState => prevState - 1);
        }
    }

    return (
        <HStack h='200' w='420' direction='row-reverse' alignItems='center' justifyContent='space-between' borderTopWidth='0.5' borderTopColor={Colors.GARY_4}>
            <VStack space='2' pr='2' >
                <Text style={[styles.text, { height: 30 }]}>{item?.name}</Text>
                <Text style={[styles.text, { height: 30 }]}>{item?.price}</Text>
            </VStack>
            <VStack space='3' paddingLeft='2' >
                <Image source={{ uri: item?.pic }} style={styles.image} alt='image' />
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

    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
});

