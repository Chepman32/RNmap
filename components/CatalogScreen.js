import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
let CatalogScreen = ({navigation}) => {
    return <Container >
        <Button
            title="Go to HomeScreen (Frame 1)" color="blue" style={{margin: 25}}
            onPress={() => navigation.navigate('HomeScreen')}
        />
        <Button containerStyle={{ margin: 25}}
            title="Go to bigPreview (Frame 2)"
            onPress={() => navigation.navigate('BigPreview')}
        />
        <Button
            title="Go to LoadingScreen (Frame 3-5)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('LoadingScreen')}
        />
        <Button
            title="Go to Results (Frame 6)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('Results')}
        />
        <Button
            title="Go to WhiteResults (Frame 6)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('White_Results')}
        />
        <Button
            title="Go to BlackResults (Frame9)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('BlackResults')}
        />
        <Button
            title="Go to Hello (Frame17)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('Hello')}
        />
        <Button
            title="Go to BigHello (Frame 18)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('BigHello')}
        />
        <Button
            title="Go to Fun (Frame 13)" color="blue" style={{margin: 25}}
            onPress={() => navigation.navigate('Fun')}
        />
        <Button
            title="Go to Hamster_Post (Frame 21)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('Hamster_Post')}
        />
        <Button
            title="MadeInScanFace (Frame 22)" color="red" style={{margin: 25}}
            onPress={() => navigation.navigate('Hamster_MadeInScanFace')}
        />
    </Container>
};
const Container = styled.ScrollView`

height: 100%;
`
const Link = styled.Button`
width: 150px;
height: 30px;
padding: 20px;
margin: 50px;
`
export default CatalogScreen;