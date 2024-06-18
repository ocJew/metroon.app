import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Footer = ({ state, descriptors, navigation }) => {
    const getIcon = (name) => {
        switch (name) {
            case 'Estação':
                return require('../assets/img/estacao.png');
            case 'Horários':
                return require('../assets/img/horarios.png');
            case 'Novidades':
                return require('../assets/img/novidades.png');
            default:
                return null;
        }
    };

    return (
        <View style={styles.baseRodaPe}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        style={styles.footerItem}
                    >
                        <View style={styles.footerItem}>
                            <View style={isFocused ? styles.imageContainerSelected : null}>
                                <Image
                                    style={styles.imageFooter}
                                    source={getIcon(route.name)}
                                />
                            </View>
                            <Text style={isFocused ? styles.footerTextSelect : styles.footerText}>
                                {route.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    baseRodaPe: {
        height: 80,
        backgroundColor: '#1A2940',
        flexDirection: "row",//alinhamos para ficar um do lado do outro
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        left: 0,
        right: 0,
        bottom: 0,
    },
    imageFooter: {
        height: 18,
        width: 18,
        fontSize: 18,
        color: '#fff',
    },
    footerText: {
        color: "#fff",
        fontSize: 14,
        //fontFamily: "",
        //fontWeight: "",
        //fontStyle: "",
        marginTop: 5,
    },
    footerTextSelect: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
        //fontStyle: "",
        marginTop: 5,
    },
    footerItem:{
        alignItems: "center",
    },
});

export default Footer;
