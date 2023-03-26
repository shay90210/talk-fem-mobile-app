import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const localImage = require('./../assets/mainbackground.jpg')

    return (
        <View style={styles.container}>
            <ImageBackground source={localImage} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>Women expressing their thoughts like it's no one else's F***ing concern.</Text>
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
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 600,
        fontWeight: 'bold',
        color: '#ECF0F1'
    },
})

export default HomeScreen;