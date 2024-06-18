import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar, StyleSheet } from 'react-native';
import Footer from './components/footer';

import HorariosScreen from './screens/HorarioScreen';
import NovidadesScreen from './screens/NovidadesScreen';
import EstacaoScreen from './screens/EstacaoScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <Footer {...props} />}
            screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        >
            <Tab.Screen name="Estação" component={EstacaoScreen} />
            <Tab.Screen name="Horários" component={HorariosScreen} />
            <Tab.Screen name="Novidades" component={NovidadesScreen} />
        </Tab.Navigator>
    );
}

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.content}>
                    <MyTabs />
                </View>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',  // Cor de fundo do contêiner principal
    },
    content: {
        flex: 1,
    },
});

export default App;
