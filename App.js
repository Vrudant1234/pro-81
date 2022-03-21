import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreateStory from "./screens/CreateStory";
import DrawerNavigation from "./screens/DrawerNavigation"
import Flower from "./screens/Flower"
import Weather from "./screens/Weather"
import Setting from "./screens/Setting"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreateStory') {
              iconName = focused ? 'create' : 'create-outline';
            }
            else if (route.name === 'DrawerNavigation') {
              iconName = focused ? 'album' : 'albums-outline';
            }
            else if (route.name === 'Flower') {
              iconName = focused ? 'flower' : 'flower-outline';
            }else if (route.name === 'Weather') { 
              iconName = focused ? 'Weather' : 'rainy-outline';
            }else if (route.name === 'Setting') {
              iconName = focused ? 'setting' : 'cog-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreateStory} />
        <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Tab.Screen name="Flower" component={Flower} />
        <Tab.Screen name="Weather" component={Weather} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}