import React from 'react';
import {View,TextInput,StyleSheet,} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props){
    const { navigation } = props;
    return(
        <KeyboardSafeView style={styles.container} behavior='height'>
            <View style={styles.inputcontainer}>
                <TextInput value="買い物リスト" multiline style={styles.input}/>
            </View>
            <CircleButton
                name="check"
                onPress={() => { navigation.goBack(); }}
            />
        </KeyboardSafeView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    inputcontainer:{
        paddingHorizontal:27,
        paddingVertical:32,
        flex:1,
    },
    input:{
        flex:1,
        textAlignVertical:'top',
        fontSize:16,
        lineHeight:24,
    }
});
