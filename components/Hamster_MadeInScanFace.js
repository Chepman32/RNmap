import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../App';
import { HamsterButton, ButtonText } from './Hamster_Post';
const Hamster_MadeInScanFace = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <View>
            <BackgroundImage/>
            <Image source={require("../assets/BigHello.png")} style={{width: "100%", height: " 100%", position: "relative"}} />
            <HamsterButton>
            <ButtonText>Hamster cheeks</ButtonText>
            </HamsterButton>
            <MadeButton>
                <PostButtonText>Made in Scan Face app</PostButtonText>
            </MadeButton>
        </View>
    )
};
const BackgroundImage = styled.Image`
width: 100%;
height: 100%;
position: absolute;

`
const MadeButton = styled.View`
height: 102px;
text-align: center;
border-radius: 35px;
justify-content: center;
align-items: center;
position: absolute;
left: 80px;
bottom: 36px;
`
const PostButtonText = styled.Text`
width: 100%;
font-weight: 600;
font-size: 24px
color: #222222;
`
export default Hamster_MadeInScanFace;