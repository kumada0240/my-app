import React from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';

import AppBar from '../components/Appbar';
import CircleButton from '../components/CircleButton';

export default function MemoListDetailScreen(){
    return(
        <View style={styles.container}>
            <AppBar/>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2021年03月17日　06:47</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <View>
                    <Text style={styles.memoText}>
                        買い物リスト
                        書体やレアウトを確認する為に用います。
                        本文用なので使い方を間違えると不自然に見える事もありますので注意が必要。
                    </Text>
                </View>
            </ScrollView>
            <CircleButton style={{top:160,bottom:'auto'}} name="edit" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    memoHeader:{
        backgroundColor:'#467FD3',
        height:96,
        justifyContent:'center',
        paddingVertical:24,
        paddingHorizontal:19,
    },
    memoTitle:{
        color:'#ffffff',
        fontSize:20,
        lineHeight:32,
        fontWeight:'bold',
    },
    memoDate:{
        color:'#ffffff',
        fontSize:12,
        lineHeight:16,
    },
    memoBody:{
        paddingVertical:32,
        paddingHorizontal:27,
    },
    memoText:{
        fontSize:16,
        lineHeight:24,
    },
});
