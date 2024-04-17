import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const featureCourse = [
  {
    title: 'learn python in 30 days',
    image:
      'https://www.classcentral.com/report/wp-content/uploads/2023/09/bcg_python_banner.png',
    tutor: 'Bibek Acharya',
    price: '55',
    rating: '4.1',
    totalRating: '150',
    isBestSeller: true,
  },
  {
    title: 'React Native full courses',
    image:
      'https://www.appstud.com/wp-content/uploads/2018/03/React-Native-Titre.png',
    tutor: 'Durga Shanker',
    price: '54',
    rating: '4.2',
    totalRating: '200',
    isBestSeller: true,
  },
  {
    title: 'JavaScript full courses',
    image:
      'https://cyberhoot.com/wp-content/uploads/2020/07/Free-Courses-to-learn-JavaScript.jpg',
    tutor: 'Ashmin Khadaka',
    price: '59',
    rating: '5',
    totalRating: '300',
    isBestSeller: false,
  },
];

const Feature = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../image/poster.jpg')}
          style={{width: '100%', height: 300}}
        />
        <Text style={{fontSize: 35, margin: 10}}>
          {'Learn From\nThe Experiences'}
        </Text>
        <Text style={{fontSize: 18, margin: 10}}>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,{' '}
        </Text>
        <View
          style={{
            height: 60,
            width: '80%',
            backgroundColor: '#e6e600',
            alignSelf: 'center',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text style={[{fontSize: 22}]}>Learn Form Expert</Text>
          <Text style={[{fontSize: 18}]}>Ends in 10 Days</Text>
        </View>
        <Text style={{margin: 10, fontSize: 30, color: 'black'}}>Featured</Text>
        <View style={{width: '100%', marginBottom: 100}}>
          <FlatList
            data={featureCourse}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{width: 300, height: 200, margin: 10}}
                  onPress={() => {
                    navigation.navigate('ViewCourse', {
                      data: item,
                    });
                  }}>
                  <View
                    style={{
                      height: '100%',
                      width: '90%',
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{height: '100%', height: 100}}
                    />
                    <Text style={{fontSize: 20, marginLeft: 10}}>
                      {item.title}
                    </Text>
                    <Text
                      style={{fontSize: 16, marginLeft: 10, color: '#8e8e8e'}}>
                      {item.tutor}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 10,
                        alignItems: 'center',
                      }}>
                      <Text>{item.rating}</Text>
                      <Image
                        source={require('../image/star.png')}
                        style={{height: 10, width: 10, marginLeft: 5}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{height: 10, width: 10}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{height: 10, width: 10}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{height: 10, width: 10}}
                      />
                      <Image
                        source={require('../image/star.png')}
                        style={{height: 10, width: 10}}
                      />
                      <Text>{'(' + item.totalRating + ')'}</Text>
                    </View>
                    <View style={{height: 20, width: 20, flexDirection: 'row'}}>
                      <Image
                        source={require('../image/rupee.png')}
                        style={{height: 20, width: 20, marginLeft: 10}}
                      />
                      <Text style={{fontSize: 20}}>{item.price}</Text>
                    </View>
                    {item.isBestSeller ? (
                      <View
                        style={{
                          height: 20,
                          width: 90,
                          backgroundColor: '#e6e600',
                          marginleft: 15,
                          alignItems: 'center',
                        }}>
                        <Text>BestSeller</Text>
                      </View>
                    ) : null}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 60,
          backgroundColor: 'black',
          position: 'absolute',
          bottom: 60,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>Signup</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Feature;
