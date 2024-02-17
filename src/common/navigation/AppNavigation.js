import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/login';
import MyCourses from '../../screens/myCourses';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const login = useSelector(state => state.user);
  const AuthStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );

  const AppStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MyCourses" component={MyCourses} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {login.is_LoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigation;
