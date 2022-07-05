import React, { useState } from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    TextInput,
    Image
} from "react-native";
import CustomButton from "../shared/customButton";

const WelcomeScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        console.log('Log in was pressed')
        navigation.push('Details')
    };

    const handleRegistration = () => {
        console.log('Registration was pressed')
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image 
                source={require("../assets/logo-icon.png")}
                style={styles.logo}
            />
            <TextInput 
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Pass your email"
            />
            <TextInput 
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Pass your password"
            />
             <CustomButton 
                onPress={handleLogIn}
                title="LOG IN"
                shapeStyle={styles.logInButton}
                textStyle={styles.logInText}
            />
            <CustomButton 
                onPress={handleRegistration}
                title="Register"
                shapeStyle={styles.registerButton}
                textStyle={styles.registrerText}
            />
        </SafeAreaView>
    );
}


const utills = {
    indent: 25
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: utills.indent
    },
    input: {
        width: '80%',
        height: '10%',
        borderRadius: 300,
        paddingLeft: 10,
        marginTop: utills.indent,
        backgroundColor: '#f2f0f0'
    }, 
    logInButton: {
        width: '80%',
        height: '10%',
        borderRadius: 300,
        backgroundColor: 'violet',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: utills.indent,
    },
    logInText: {
        color: 'white',
        fontWeight: '500'
    },
    registerButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        radius: 300,
        marginTop: utills.indent
    },
    registrerText: {
        color: 'black',
        fontWeight: '500'
    }
})

export default WelcomeScreen;