import React, { Children } from 'react';
import {View,StyleSheet} from 'react-native';
import {string,shape} from 'prop-types';
import { Entypo } from '@expo/vector-icons';

export default function CircleButton(props){
    const{ style,name } = props;
    return(
      <View style={[styles.circleButton,style,name]}>
        <Entypo name={name} size={24} color="white" />
      </View>
    );
}

CircleButton.propTypes = {
  style:shape(),
  name:string.isRequired,
};

CircleButton.defaultProps={
  style:null,
};

const styles = StyleSheet.create({
  circleButtonLabel:{
    color:'#ffffff',
    fontSize:40,
    lineHeight:40,
  },
  circleButton:{
    backgroundColor:"#467FD3",
    width:64,
    height:64,
    borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:40,
    bottom:40,
    shadowColor:'#000000',
    shadowOffset: { width: 0,height: 8 },
    shadowOpacity:0.25,
    shadowRadius:1,
    elevation:8,
  },
});

