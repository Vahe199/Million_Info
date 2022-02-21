import React, {useEffect} from "react";
import {ActivityIndicator, ImageBackground, View, Image} from "react-native";

export const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MapPage')
        }, 2000)
    }, [])


    return (
        <View style={{ flex: 1 }}>

                <ImageBackground source={require('../../assets/homeImg.png')} resizeMode="contain" style={{
                    flex: 1,
                    justifyContent: "center"
                }}>
                <ActivityIndicator style={{marginTop: 80}} size="large" color="#7667F2" />
                </ImageBackground>

        </View>
    );

};
