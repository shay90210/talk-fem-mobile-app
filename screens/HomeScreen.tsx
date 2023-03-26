import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const localImage = require('./../assets/mainbackground.jpg')

    return (
        <View style={styles.container}>
            <ImageBackground source={localImage} resizeMode='cover' style={styles.image}>
                <Text style={styles.text}>express yourself.</Text>
                <Text style={styles.text}>Period.</Text>
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
        fontWeight: 'bold',
        color: '#CD5C5C'
    },
})

export default HomeScreen;