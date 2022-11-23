import React from 'react';
import { HStack, StatusBar } from 'native-base';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '~/style'
import { fontWeight } from '~/utils/Style';

const AppBar = (props: { title: any; icon: any }) => {
    const { title, icon } = props
    return (
        <>
            <StatusBar backgroundColor={Colors.PRIMARY_LIGHT} />
            <HStack
                bg={Colors.PRIMARY_LIGHT}
                px="1"
                py="2"
                pl='6'
                pr='6'
                direction="row-reverse"
                justifyContent='space-between'
                alignItems="center"
                w="100%"
                h='55px'
            >
                <Text style={styles.appBarText}>
                    {title}
                </Text>
                <Icon name={icon} size={23} color={Colors.GARY_1} />
            </HStack>
        </>
    );
}
export default AppBar
const styles = StyleSheet.create({
    appBarText: {
        color: Colors.GARY_1,
        fontSize: 18,
        fontWeight: fontWeight.bold,
    }
})