import { View, Platform, Text } from 'react-native';
import Constants from 'expo-constants';

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Text>HELLO SHANNON</Text>
        </View>
    )
}

export default Main;