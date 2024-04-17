import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';

const ViewCourse = () => {
  const route = useRoute();
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Image
          source={{uri: route.params.data.image}}
          style={{
            height: 200,
            alignSelf: 'center',
            width: '90%',
            
            marginLeft: 10,
          }}
        />
        <Text style={{fontSize: 22, marginLeft: 10}}>
          {route.params.data.title}
        </Text>
        <Text style={{fontSize: 18, marginLeft: 10}}>
          Hey i will teach you int this course step by step to create project
        </Text>
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={{fontSize: 20}}>{route.params.data.rating}</Text>
          <Image
            source={require('../image/star.png')}
            style={{height: 15, width: 15, marginLeft: 5}}
          />
          <Image
            source={require('../image/star.png')}
            style={{height: 15, width: 15}}
          />
          <Image
            source={require('../image/star.png')}
            style={{height: 15, width: 15}}
          />
          <Image
            source={require('../image/star.png')}
            style={{height: 15, width: 15}}
          />
          <Image
            source={require('../image/star.png')}
            style={{height: 15, width: 15}}
          />
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, margin: 10}}>
          <Text style={{}}>posted by:</Text>
          <Text style={{fontSize: 18, color: 'purple'}}>
            {route.params.data.tutor}
          </Text>
        </View>
        <View>
          <FlatList
            data={[
              {
                title: 'last update since 2024 april 4',
                icon: require('../image/exc.png'),
              },
              {
                title: 'English',
                icon: require('../image/lang.png'),
              },
              {
                title: 'English',
                icon: require('../image/caption.png'),
              },
            ]}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={item.icon}
                    style={{width: 24, height: 24, marginLeft: 10, margin: 3}}
                  />
                  <Text style={{fontSize: 15}}>{item.title}</Text>
                </View>
              );
            }}
          />
          <Text style={{marginLeft: 10, fontSize: 35}}>NPR 57.00</Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: '80%',
              backgroundColor: 'purple',
              alignItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 35,
            }}>
            <Text style={{fontSize: 30, color: 'white'}}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: '80%',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 35,

              margin: 5,
            }}>
            <Text style={{fontSize: 30, color: 'black'}}>Add to Cart</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20, marginLeft: 10}}>Curriculum</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margintop: 5,
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 18}}>
              {'10 section,48 lecture,9 hours'}
            </Text>
          </View>
          <View>
            <FlatList
              data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      height: 70,
                      width: '100%',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', margin: 20}}>
                      <Text>{index + 1}</Text>
                      <View style={{marginLeft: 20}}>
                        <Text style={{fontSize: 20}}>
                          {'video' + (index + 1)}
                        </Text>
                        <Text style={{fontSize: 15}}>{index + 1 + 'min'}</Text>
                      </View>
                    </View>
                <TouchableOpacity>
                <Image
                        source={require('../image/plays.png')}
                        style={{height: 20, width: 20, marginRight: 10}}
                      />
                </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewCourse;
