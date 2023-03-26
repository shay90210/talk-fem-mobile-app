import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const localImage = require('./../assets/mainbackground.jpg')

    return (
        <View style={styles.container}>
            <ImageBackground source={localImage} resizeMode='cover' style={styles.image}>
                <Text>HOME SCREEN</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default HomeScreen;