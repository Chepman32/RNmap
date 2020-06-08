import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
import { Container } from '../App';
import { ScrollView } from 'react-native-gesture-handler';
const DailyTips = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <ScrollView>
            <Container>
            <GrayBlock>
                <Title>Daily tips</Title>
                <Desc>You are charming, be sure to meet a new
                    person in the coming days!</Desc>
                    <Bars>
                        <Bars>
                            <BigBar style={{marginRight: 22}}>
                                <WaterBarInner>
                                    <BarText>2.1 water</BarText>
                                </WaterBarInner>
                            </BigBar  >
                            <BigBar>
                                <AllureBarInner>
                                    <BarText>94% a llure</BarText>
                                </AllureBarInner>
                            </BigBar>
                        </Bars>
                    </Bars>
            </GrayBlock>
                <GrayBlockBottom style={{marginTop: 35}}>
                    <Title style={{marginTop: 55}} >Fun</Title>
                    <Desc style={{marginBottom: 47}}>Life is boring without fun. So, I can joke about you and me.</Desc>
                    <Image source={require("../assets/BigHello.png")} 
                    style={{width: 265, height: 400, borderRadius: 50, position: "relative", marginBottom: 67}}
                     blurRadius={30}/>
                    <OpenButton>
                        <OpenText>Open</OpenText>
                    </OpenButton>
                </GrayBlockBottom>
        </Container>
        </ScrollView>
    )
};
const GrayBlock = styled.TouchableOpacity`
padding-left: 19px;
background: #F7F7F7;
border-radius: 35px;
`
const GrayBlockBottom = styled.View`
padding-left: 19px;
margin-bottom: 54px;
background: #F7F7F7;
border-radius: 35px;
`
const Title = styled.Text`
margin-bottom: 29px;
margin-top: 25px;
text-align: center;
font-weight: 600;
font-size: 36px;
color: #222222;
`
const Desc = styled.Text`
font-weight: 500;
font-size: 22px;
text-align: center;
color: #222222;
`
const Bars = styled.View`
flex-direction: row;
margin-bottom: 30px;
margin-top: 22px;
`
const WaterBarInner = styled.View`
width: 117px;
height: 125px;
background: #DEEFFF;
border-radius: 35px;
`
const BigBar = styled.View`
position: relative;
width: 117px;
height: 211px;
border-radius: 35px;
background: #FFFFFF;
flex-direction: row;
align-items: flex-end;
`
const AllureBarInner = styled.View`

width: 117px;
height: 94%;
background: #FFDEF0;
border-radius: 35px;
`
const BarText = styled.Text`
align-self: center;
position: absolute;
top: 30%;
font-weight: 600;
font-size: 24px;
color: #222222;
`
const OpenButton = styled.TouchableOpacity`
position: absolute;
bottom: 137px;
left: 16%
width: 61%;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 30px 0;
background: #FFFFFF;
border-radius: 35px;
`
const OpenText = styled.Text`
text-align: center;
font-weight: 500;
font-size: 36px;
color: #222222;
`
export default DailyTips;