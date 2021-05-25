import React, { useState } from 'react';
import { Input, Text, Button } from 'react-native-elements';

const CreateAccountScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    console.log(email, password)

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
                    navigation.navigate('Home')
                }}
            />
        </>
    );
};

export default CreateAccountScreen;