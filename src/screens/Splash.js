import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';


const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Main');
      }, 2000);
    }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffff',
      }}>
      <Image
        source={require('../image/logo.png')}
        style={{height: 130, width: 400}}
      />
    </View>
  );
};

export default Splash;
