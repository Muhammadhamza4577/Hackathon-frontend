import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Intro from './screen/Intro';
import Login from './screen/Login';
import Register from './screen/Register';
import UserPanel from './screen/UserPanel';
import AdminPanel from './screen/AdminPanel';
// import UserTab from './navigation/userTab';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Intro'}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        {/* <Stack.Screen name="UserTab" component={UserTab} /> */}
        <Stack.Screen name="UserPanel" component={UserPanel} />
        <Stack.Screen name="AdminPanel" component={AdminPanel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
