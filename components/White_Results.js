import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';
const White_Results = (props) => {
    let {height, width} = Dimensions.get("screen")
    return (
        <Container>
            <MainTitle>You are a lover</MainTitle>
            <TopContainer>
            <Photo source={require("../assets/anastasiya-pavlova-7ip-IOC2yvA-unsplash_420x542.png")}/>
            <AllureBar>
                <AllureBarInner>
                    <AllureBarText>89% allure</AllureBarText>
                    </AllureBarInner>
            </AllureBar>
            </TopContainer>
            <LoveBar>
                <LoveBarInner>
                    <BottomBarsText>74% love</BottomBarsText>
                </LoveBarInner>
            </LoveBar>
            <FriendBar>
                <FriendBarInner>
                    <BottomBarsText>61% friend</BottomBarsText>
                </FriendBarInner>
            </FriendBar>
            <BottomTitle>Advice from Scan Face</BottomTitle>
            <BottomDesc>You are charming, be sure to meet a new person in the coming days!</BottomDesc>
            <PostButton><PostButtonText>Post to story</PostButtonText></PostButton>
        </Container>
    );
};
const Container = styled.ScrollView`
padding: 44px 48px;
`
const MainTitle = styled.Text`
margin-bottom: 35px;
margin-top: 145px;
fontWeight: 600;
fontSize: 48px;
`
const TopContainer = styled.View`
flex-direction: row;
margin-bottom: 35px;
`
const Photo = styled.Image`
margin-right: 35px;
width: 65%;
height: 84%;
border-radius: 50px;
`
const AllureBar = styled.View`
display: flex;
flex-direction: row;
align-items: flex-end;
width: 134px;
height: 542px;
background: #F7F7F7;
border-radius: 35px;
`
const AllureBarInner = styled.View`
height: 40%;
display: flex;
flex-direction: row;
align-items: center;
padding: 0 5px;
border-radius: 35px;
background: #DEEFFF;
height: 440px;
`
const LoveBar = styled.View`
margin-bottom: 27px;
width: 100%;
height: 54px;
background: #FFFFFF;
border-radius: 50px;
`
const LoveBarInner = styled.View`
justify-content: center;
align-items: center;
width: 74%;
height: 54px;
background: #FFDEF0;
`
const FriendBar = styled.View`
width: 100%;
height: 54px;
background: #FFFFFF;
border-radius: 50px;
`
const FriendBarInner = styled.View`
width: 61%;
height: 54px;
background: #DEFFF3;
`
const AllureBarText = styled.Text`
font-weight: 600;
font-size: 36px;
color: #222222;
align-self: center;
`
const BottomBarsText = styled.Text`
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #222222;
`
const BottomTitle = styled.Text`
margin-top: 75px;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #222222;
`
const BottomDesc = styled.Text`
font-weight: 500;
font-size: 22px;
line-height: 27px;
text-align: center;
color: #222222;
`
export const PostButton = styled.TouchableOpacity`
width: 236px;
height: 102px;
border-radius: 35px;
justify-content: center;
align-items: center;
margin-top: 63px;
margin-bottom: 84px;
`
const PostButtonText = styled.Text`
width: 100%;
font-weight: 600;
font-size: 24px
color: #DEEFFF;
`
export default White_Results;