import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { HomeCard, AppBar } from '~/component';
import { Colors } from '~/style'
import { navigate } from '~/navigation/Methods';
const renderItem = () => {
    return (
        <HomeCard />
    )
}
const item = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }]
export default function Home() {
    return (

        <View style={styles.container} >
            <AppBar title='صفحه اصلی' icon='home' />
            <View style={styles.flatList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    // columnWrapperStyle={{ flexDirection: 'row-reverse' }}
                    contentContainerStyle={{
                        alignSelf: 'center',
                    }}
                    // numColumns={2}
                    data={item}
                    keyExtractor={(_, index) => `itm${index}`}
                    renderItem={renderItem}
                />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_LIGHT
    },
    flatList: {
        paddingBottom: 70,
        paddingTop: 10
    }
});