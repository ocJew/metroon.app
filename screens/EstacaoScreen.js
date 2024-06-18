import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

const EstacaoScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: `https://ocjew.github.io/mapa-metroon/` }} />
        </View>
    );
};

export default EstacaoScreen;
