import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NovidadesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Novidades Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default NovidadesScreen;
