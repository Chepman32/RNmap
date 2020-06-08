import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../App';
import { ScrollView } from 'react-native-gesture-handler';
const Fun = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <ScrollView>
            <Container>
            <Title>Fun</Title>
            <DescText>Life is boring without fun. So, I can joke about you and me.</DescText>
            <Image source={require("../assets/../assets/anastasiya-pavlova-7ip-IOC2yvA-unsplash.png")} style={{width: 327, height: 374, position: "relative", borderRadius: "50px"}}/>
            <View style={{
                position: "absolute",
                width: "100%",
                height: "20%",
                bottom: "10%",
            }}>
            <ImageText>Hi boy! What are you doing tonight?</ImageText>
            </View>
            <TrialBlock>
                <TrialTitle>I want to try</TrialTitle>
                <TrialText>Activate the free trial version for 7 days</TrialText>
                <TrialButton>
                    <TrialButtonText>Oh, yeah</TrialButtonText>
                </TrialButton>
                <Discount>After $ 5.99 / month</Discount>
            </TrialBlock>
        </Container>
        </ScrollView>
    )
};
const Title = styled.Text`
text-align: center;
margin-bottom: 29px;
margin-top: 10px;
font-weight: 600;
font-size: 36px;
color: #222222;
`
const DescText = styled.Text`
margin-top: 78px;
margin-bottom: 47px;
font-weight: 500;
font-size: 24px;
color: #222222;
`
const ImageTextBlock = styled.View`
position: absolute;
width: 327px;
left: 45px;
bottom: 0;
padding: 25px 12px;
background: rgba(196, 196, 196, 0.4);
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
`
const ImageText = styled.Text`
text-align: center;
width: 340px;
font-weight: 600;
font-size: 24px;
color: #FFFFFF;
`
const TrialBlock = styled.View`
width: 100%;
margin-top: 35px;
margin-bottom: 84px;
background: #DEEFFF;
border-radius: 35px;
align-items: center;
`
const TrialTitle =styled.Text`
margin-top: 55px;
text-align: center;
font-weight: 600;
font-size: 36px;
color: #222222;
`
const TrialText =styled.Text`
text-align: center;
width: 100%;
margin-bottom: 42px;
font-weight: 500;
font-size: 20px;
color: #222222;
margin-top: 29px;
`
const TrialButton = styled.TouchableOpacity`
width: 255px;
background: #FFFFFF;
border-radius: 35px;
width: 48%;
`
const TrialButtonText = styled.Text`
width: 100%;
padding: 0 40px;
font-weight: 500;
font-size: 36px;
`
const Discount = styled.Text`
margin-top: 37px;
margin-bottom: 42px;
font-weight: 500;
font-size: 18px;
text-align: center;
color: #222222;
`
export default Fun;