import React from 'react';
import {View,ScrollView,Text,StyleSheet} from 'react-native';

import AppBar from '../components/Appbar';
import CircleButton from '../components/CircleButton';

export default function MemoListDetailScreen(){
    return(
        <View>
            <AppBar/>
            <View>
                <Text>買い物リスト</Text>
                <Text>2021年03月17日　06:47</Text>
            </View>
            <ScrollView>
                <View>
                    <Text>
                        買い物リスト
                        書体やレアウトを確認する為に用います。
                        本文用なので使い方を間違えると不自然に見える事もありますので注意が必要。
                    </Text>
                </View>
            </ScrollView>
            <CircleButton>+</CircleButton>
        </View>
    );
}
