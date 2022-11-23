import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { Colors } from '~/style';
import { fontFamily } from '~/utils/Style'

export default function CustomButton(props: { title: string, onPress: any, style: any }) {
    const { title, onPress, style } = props;
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.textButton}>{title}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        height: 35,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.SECONDARY_LIGHT,
        backgroundColor: Colors.PRIMARY_LIGHT,
    },
    textButton: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: fontFamily.regular,
        color: Colors.SECONDARY

    }
});

