import { View, Platform } from 'react-native';
import Constants from 'expo-constants';

import HomeScreen from './HomeScreen';
import EpisodeScreen from './EpisodeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#c3195d',
    headerStyle: { backgroundColor: '#f48db4' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const EpisodeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Episodes'
                component={EpisodeScreen}
                options={{ title: 'Episodes' }}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: 'white' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Episodes'
                    component={EpisodeNavigator}
                    options={{ title: 'Episodes' }}
                />
            </Drawer.Navigator>
        </View>
    )
}

export default Main;