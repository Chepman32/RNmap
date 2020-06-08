import React from "react";
import { View, Text, Button } from "react-native";
import styled from "styled-components"
let LoadingScreen = ({navigation}) => {
    return <Container >
        <LoadingText>I am analyzing...</LoadingText>
    </Container>
};
const Container = styled.View`
justify-content: center;
align-items: center;
height: 100%;
`;
const LoadingText = styled.Text`

font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 78px;
color: #222222;
`
export default LoadingScreen;