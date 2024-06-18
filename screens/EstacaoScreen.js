import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

const App = () => {
    const [hasLocationPermission, setHasLocationPermission] = useState(null);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setHasLocationPermission(false);
            return;
        }
        setHasLocationPermission(true);
        })();
    }, []);

    if (hasLocationPermission === null) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (hasLocationPermission === false) {
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>...</Text>
        </View>
    }

    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: `https://ocjew.github.io/mapa-metroon/` }} />
        </View>
    );
};

export default App;
