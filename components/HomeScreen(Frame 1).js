import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import styled from "styled-components";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function HomeScreen() {
    var {height, width} = Dimensions.get('window');
    return (
        <ScrollView>
            <Container>
            <Title>Hello</Title>
            <Preview source={require("../assets/anastasiya-pavlova-7ip-IOC2yvA-unsplash_420x542.png")}/>
            <TouchableOpacity>
            <AntDesign name="pluscircle" size={96} color="#F6F6F6" />
            </TouchableOpacity>
            <Text style={{marginBottom:  120, marginTop: 82}}>Add your photo and I tell about you</Text>
        </Container>
        </ScrollView>
    );
}
const Container = styled.View`
background: #fff;
justify-content: center;
align-items: center;
padding-top: 155px;
`
const Title = styled.Text`
  font-style: normal;
font-weight: 600;
font-weight: 600;
font-size: 72px;
line-height: 88px;
text-align: center;
margin-bottom: 91px
`;
const Preview = styled.Image`
    width: 324px;
    height: 374px;
    margin-bottom: 102px;
    border-radius: 50px;
    `
const BottomText = styled.Text`
margin-top: 178px;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #000;
`