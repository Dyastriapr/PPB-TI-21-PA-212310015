import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from '../screens/Login';

const Stack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={Login}
                />


            </Stack.Navigator>
        </NavigationContainer>
       
    );
}

const styles = StyleSheet.create({})

export default Stack;
