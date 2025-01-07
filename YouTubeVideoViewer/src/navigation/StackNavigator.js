import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import VideoListScreen from '../screens/VideoListScreen';
import VideoDetailsScreen from '../screens/VideoDetailsScreen';
import ErrorScreen from '../screens/ErrorScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Stack.Screen name="VideoList" component={VideoListScreen} options={{ title: 'Video List' }} />
                <Stack.Screen name="VideoDetails" component={VideoDetailsScreen} options={{ title: 'Video Details' }} />
                <Stack.Screen name="Error" component={ErrorScreen} options={{ title: 'Error' }} />
                <Stack.Screen name="Loading" component={LoadingScreen} options={{ title: 'Loading' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
