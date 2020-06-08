import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../App';
const Hamster_Post = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <View>
            <BackgroundImage/>
            <Image source={require("../assets/BigHello.png")} style={{width: "100%", height: " 100%", position: "relative"}} />
            <HamsterButton>
                <ButtonText>Hamster cheeks</ButtonText>
            </HamsterButton>
            <PostButton>
                <PostButtonText>Post to story</PostButtonText>
            </PostButton>
        </View>
    )
};
const BackgroundImage = styled.Image`
width: 100%;
height: 100%;
position: absolute;

`
export const HamsterButton = styled.TouchableOpacity`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
width: 80%;
height: 125px;
background: #FFDEF0;
border-radius: 35px;
border-bottom-right-radius: 0
position: absolute;
left: 40px;
bottom: 206px;
`
export const ButtonText = styled.Text`
width: 100%
text-align: center;;
font-weight: 600;
font-size: 28px;
color: #000000;
`
const PostButton = styled.TouchableOpacity`
width: 236px;
height: 102px;
background: rgba(247, 247, 247, 0.5);
border-radius: 35px;
justify-content: center;
align-items: center;
position: absolute;
left: 80px;
bottom: 36px;
`
const PostButtonText = styled.Text`
font-weight: 600;
font-size: 24px
color: #222222;
`
export default Hamster_Post;