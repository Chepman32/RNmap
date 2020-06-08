import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import styled from "styled-components";
import { AntDesign } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./components/HomeScreen(Frame 1)";
import Results from "./components/Results";
import BlackResults from "./components/Black_Results";
import LoadingScreen from "./components/LoadingScreen(Frame 3)";
import createStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import CatalogScreen from "./components/CatalogScreen";
import Hello from "./components/Hello";
import BigHello from "./components/BigHello";
import Fun from "./components/Fun";
import BigPreview from "./components/bigPreview";
import DailyTips from "./components/DailyTips";
import Hamster_Post from './components/Hamster_Post';
import SmallBlackResults from './components/SmallBlackResults';
import Hamster_MadeInScanFace from './components/Hamster_MadeInScanFace';
import White_Results from './components/White_Results';
export default function App() {
  var {height, width} = Dimensions.get('window');
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BigPreview">
                <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
                <Stack.Screen name="BigPreview" component={BigPreview} />
                <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Results" component={Results} />
                <Stack.Screen name="BlackResults" component={BlackResults} />
                <Stack.Screen name="Hello" component={Hello} />
                <Stack.Screen name="BigHello" component={BigHello} />
                <Stack.Screen name="Fun" component={Fun} />
                <Stack.Screen name="DailyTips" component={DailyTips} />
                <Stack.Screen name="Hamster_Post" component={Hamster_Post} />
                <Stack.Screen name="SmallBlackResults" component={SmallBlackResults} />
                <Stack.Screen name="Hamster_MadeInScanFace" component={Hamster_MadeInScanFace} />
                <Stack.Screen name="White_Results" component={White_Results} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}
export const Container = styled.View`
padding: 0 37px;
background: #fff;
justify-content: center
align-items: center
margin-top: 55px;
`