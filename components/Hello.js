import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
const Hello = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <View>
            <HelloText>Hello, Stefany!</HelloText>
            <Image source={require("../assets/../assets/anastasiya-pavlova-7ip-IOC2yvA-unsplash.png")} style={{width: 327, height: 374}}/>
            <QuadAddButton>
                <MaterialIcons name="add" size={56} color="black" />
            </QuadAddButton>
            <BottomText>Add your new photo every day</BottomText>
        </View>
    )
};
const HelloText = styled.Text`
margin-top: 30%;
font-weight: 600;
font-size: 48px;
color: #222222;
`
const QuadAddButton = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: 125px;
height: 125px;
background: #F6F6F6;
border-radius: 35px;
padding: 34px;
margin: 0 auto;
`
const BottomText = styled.Text`
margin-top: 78px;
font-weight: 500;
font-size: 24px;
color: #222222;
`
export default Hello;