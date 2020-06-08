import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
const BigHello = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <View>
            <Image source={require("../assets/BigHello.png")} style={{width: "100%", height: " 100%"}} />
            <QuadAddButton>
                <MaterialIcons name="add" size={56} color="black" />
            </QuadAddButton>
        </View>
    )
};
const QuadAddButton = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width: 125px;
height: 125px;
background: rgba(246, 246, 246, 0.5);
border-radius: 35px;
padding: 34px;
margin: 0 auto;
position: absolute;
bottom: 233px;
left: 150px;
`;

export default BigHello;