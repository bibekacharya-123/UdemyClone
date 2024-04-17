import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

const Account = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {/*header portion*/}
      <View
        style={{
          height: 60,
          width: '100%',
          borderWidth: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>Account</Text>
      </View>
      <Text style={{margin: 15, fontSize: 18}}>Support</Text>
      <View>
        <FlatList
          data={[
            {title: 'About Udemy', isIcon: true},
            {title: 'About Udemy Buiness', isIcon: true},
            {title: 'Help and Support', isIcon: false},
            {title: 'Share the Udemy app', isIcon: false},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  borderColor: 'black',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{margin: 10, fontSize: 20}}>{item.title}</Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../image/next.png')}
                      style={{width: 16, height: 16, marginRight: 10}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity style={{alignItems:'center',margintop:20}}>
      <Text style={{fontSize:20,color:'blue'}}>Singout</Text>
      
    </TouchableOpacity>
    <TouchableOpacity style={{alignItems:'center',margin:10}}>
      
      <Text style={{fontSize:15,color:'black'}}>Udemy v 23 by bibek ...</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Account;
