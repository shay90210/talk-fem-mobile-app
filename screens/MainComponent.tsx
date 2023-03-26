import { View, Platform, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import HomeScreen from './HomeScreen';
import EpisodeScreen from './EpisodeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Icon } from '@rneui/themed';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#ECF0F1',
    headerStyle: { backgroundColor: '#CD5C5C' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'HOME',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    title: 'PODCAST EPISODES',
                    headerLeft: () => (
                        <Icon
                            name='headphones'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                    options={{
                        title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Episodes'
                    component={EpisodeNavigator}
                    options={{
                        title: 'Episodes',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='headphones'
                                type='font-awesome'
                                size={28}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 20,
        color: '#ECF0F1',
        fontSize: 30
    },
});

export default Main;