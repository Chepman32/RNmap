import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import styled from "styled-components";
const BlackResults = () => {
    let {height, width} = Dimensions.get("screen")
    return (
        <Container style={{background: "#000"}} >
            <MainTitle>You are a lover</MainTitle>
            <TopContainer>
            <Photo source={{uri: 'https://news.images.itv.com/image/file/2208659/stream_2.43745425.jpg'}}/>
            <AllureBar>
                <AllureBarInner><AllureBarText>89% allure</AllureBarText></AllureBarInner>
            </AllureBar>
            </TopContainer>
            <BottomContainer>
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
            </BottomContainer>
            <BottomContainer>
                <View style={{flexDirection: "row"}}>
                <Image
          style={{width: 48, height: 63}}
          source={require('../assets/S.png')}
        />
            <BottomTitle>Advice from Scan Face</BottomTitle>
                </View>
            <BottomDesc>You are charming, be sure to meet a new person in the coming days!</BottomDesc>
            </BottomContainer>
            <PostButton><PostButtonText>Made in Scan Face app</PostButtonText></PostButton>
        </Container>
    )
};
const Container = styled.ScrollView`
padding: 44px 48px;
background: #000
`
const BackButton = styled.TouchableOpacity`
width: 98px;
height: 70px;
ackground: #fff;
border-radius: 35px;
margin-top: 75px;
margin-left: 46px;
`
const MainTitle = styled.Text`
margin-bottom: 35px;
margin-top: 145px;
fontWeight: 600;
fontSize: 48px;
color: #fff;
`
const TopContainer = styled.View`
flex-direction: row;
`
const Photo = styled.Image`
margin-right: 35px;
width: 55%;
height: 84%;
border-radius: 50px;
`
const AllureBar = styled.View`
width: 134px;
height: 542px;
background: #F7F7F7;
border-radius: 35px;
`
const AllureBarInner = styled.View`
width: 100%;
border-radius: 35px;
background: #DEEFFF;
height: 440px;
justify-content: center;
`
const BottomContainer = styled.View`
background: rgba(247, 247, 247, 0.5);
border-radius: 15px;
padding: 26px 34px;
margin: 35px 0
width: 110%;
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
const BottomBarsText = styled.Text`
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #222222;
`
const AllureBarText = styled.Text`
font-weight: 600;
font-size: 36px;
color: #222222;
align-self: center;
`
const BottomTitle = styled.Text`
margin-left: 30px;
margin-bottom: 37px;
font-weight: 600;
font-size: 24px;
line-height: 29px;
color: #fff;
`
const BottomDesc = styled.Text`
font-weight: 500;
font-size: 22px;
line-height: 27px;
text-align: center;
color: #fff;
`
const PostButton = styled.TouchableOpacity`
width: 100%;
height: 102px;
border-radius: 35px;
justify-content: center;
align-items: center;
margin-top: 63px;
margin-bottom: 84px;
`
const PostButtonText = styled.Text`
font-weight: 600;
font-size: 24px
color: #fff;
`
export default BlackResults;