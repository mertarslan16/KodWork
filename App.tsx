// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {JobsScreen} from './src/screens/JobsScreen';
import {FavoritesScreen} from './src/screens/FavoritesScreen';
import JobDetailScreen from './src/screens/JobDetailScreen';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="JobList" component={JobsScreen} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Jobs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff4757',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="Jobs"
          component={JobStack}
          options={{
            title: 'Job List',
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: 'Favorite Jobs',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
