import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '~screens/HomeScreen';
import SearchScreen from '~screens/SearchScreen';
import {Text, View} from 'react-native';
const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SearchScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          // options={{headerTitle: props => <HeaderDefault {...props} />}}
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
