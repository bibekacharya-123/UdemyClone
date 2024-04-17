import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feature from '../tabs/Feature';
import Learning from '../tabs/Learning';
import Wishlist from '../tabs/Wishlist';
import Account from '../tabs/Account';
import Search from '../tabs/Search';

const Main = () => {
  const [selectedTab, setselectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {selectedTab == 0 ? (
        <Feature />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Learning />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Account />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: '0%',
          backgroundColor: 'white',
          height: 60,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(0);
          }}>
          <Image
            source={selectedTab==0?require('../image/featurefill.png')
          : require('../image/feature.jpg')}
            style={{height: 24, width: 24}}
          />
          <Text style={{}}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(1);
          }}>
          <Image
            source={selectedTab == 1
              ? require('../image/searchfill.png')
              : require('../image/search.png')}
            style={{height: 24, width: 24}}
          />
          <Text style={{flexDirection: 'row'}}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(2);
          }}>
          <Image
            source={selectedTab == 2
              ? require('../image/playfill.png')
              : require('../image/plays.png')}
            style={{height: 24, width: 24}}
          />
          <Text style={{flexDirection: 'row'}}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(3);
          }}>
          <Image
            source={selectedTab == 3
              ? require('../image/whishlistfill.png')
              : require('../image/wishlist.png')}
            style={{height: 26, width: 28}}
          />
          <Text style={{flexDirection: 'row'}}></Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setselectedTab(4);
          }}>
          <Image
            source={
              selectedTab == 4
                ? require('../image/accountfill.png')
                : require('../image/account.png')
            }
            style={{height: 24, width: 24}}
          />
          <Text style={{flexDirection: 'row'}}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
