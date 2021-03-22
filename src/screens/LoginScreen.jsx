import React,{ useState } from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import Button from '../components/Button';

export default function LoginScreen(props){
    const {navigation} = props;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return(
        <View style={styles.container}>
            <View  style={styles.inner}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    value="Emall Adress"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => {setEmail(text); }}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder="Email Adress"
                />
                <TextInput
                    value="Pass Word"
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => {setPassword(text); }}
                    autoCapitalize='none'
                    placeholder="Password"
                    secureTextEntry
                    textContentType='password'
                />
                <Button
                    lavel="Submit"
                    onPress={() => {
                        navigation.reset({
                            index:0,
                            routes:[{ name:'MemoList' }],
                        });
                    }}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registered?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.reset({
                                index:0,
                                routes: [{ name: 'SingUp' }],
                            });
                        }}
                    >
                        <Text style={styles.footerLink}>Sign up here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F4F8',
    },
    inner:{
        paddingHorizontal:27,
        paddingVertical:24,
    },
    title:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:20,
    },
    input:{
        fontSize:16,
        height:48,
        backgroundColor:'#DDDDDD',
        borderWidth:1,
        backgroundColor:'#ffffff',
        paddingHorizontal:8,
        marginBottom:16,
    },
    footerText:{
        fontSize:14,
        lineHeight:24,
        marginRight:8,
    },
    footerLink:{
        fontSize:14,
        lineHeight:24,
        color:'#467FD3',
    },
    footer:{
        flexDirection:'row',
    },
});
