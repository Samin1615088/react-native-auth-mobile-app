import React, { useState } from 'react';
import { Input, Text, Button } from 'react-native-elements';
import { TouchableOpacity } from "react-native";
import firebase from "./../../utils/firebaseConfig/firebase"
const CreateAccountScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const createAccount = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            {
                error ?
                    <Text style={{ color: 'red' }}>{error}</Text>
                    :
                    null
            }
            <Button
                title="Create Account"
                onPress={() => {
                    console.log("press")
                    createAccount();
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text>Already have an account?</Text>
            </TouchableOpacity>
        </>
    );
};

export default CreateAccountScreen;