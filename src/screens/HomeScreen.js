import {
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import React, {useState} from 'react';

import changeNavigationBarColor from 'react-native-navigation-bar-color'
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {freeGames, paidGames} from '../models/data';
import ListItem from '../components/listItem';
import SwitchBtn from '../components/switchBtn';
import {windowWidth} from '../utility/Dimensions';
import {slideData} from '../models/data';
import BannerSlider from '../components/BannerSlider';

const HomeScreen = (props) => {
    changeNavigationBarColor('black', false)
  const [entries, setEntries] = useState(slideData);
  const [activeSlide, setActiveSlide] = useState(0);
  const [gamesTab, setGamesTab] = useState('freemode');

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  //   const pagination = () => {
  //     return (
  //       <Pagination
  //         dotsLength={entries.length}
  //         activeDotIndex={activeSlide}
  //         containerStyle={{marginVertical: -10}}
  //         dotStyle={{
  //           width: 10,
  //           height: 10,
  //           borderRadius: 5,
  //           marginHorizontal: -4,
  //           backgroundColor: 'rgba(0, 0, 0, 0.75)',
  //         }}
  //         inactiveDotStyle={
  //           {
  //             // Define styles for inactive dots here
  //           }
  //         }
  //         inactiveDotOpacity={0.4}
  //         inactiveDotScale={0.6}
  //       />
  //     );
  //   };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
    <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <Text
            style={{color: 'black', fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Hello John Doe
          </Text>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image
              source={require('../../Assets/images/profile.png')}
              style={{width: 35, height: 35, borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1.5,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <Feather
            name="search"
            size={25}
            color="#C6C6C6"
            style={{marginHorizontal: 10}}
          />
          <TextInput
            style={{
              color: '#aaa',
              letterSpacing: 0.5,
              width: '90%',
              fontSize: 16,
              fontFamily: 'Roboto-Regular',
            }}
            placeholder="Search"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text
            style={{color: 'black', fontSize: 18, fontFamily: 'Roboto-Medium'}}>
            Upcoming Games
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: '#0aada8'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Carousel
            data={entries}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            onSnapToItem={index => setActiveSlide(index)}
            loop={true}
          />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            {entries.map((e, i) => (
              <MaterialIcons
                style={{marginHorizontal: 3}}
                name={
                  i === activeSlide
                    ? 'radio-button-checked'
                    : 'radio-button-unchecked'
                }
                size={(i === activeSlide && 12) || 10}
                key={i}
                color="#0aada8"
              />
            ))}
          </View>
        </View>

        <View style={{marginVertical: 20}}>
          <SwitchBtn
            option1="Free Games"
            option2="Paid Games"
            setGameTab={setGamesTab}
          />
        </View>
        {gamesTab === 'freemode' &&
          freeGames.map(game => <ListItem onPress={() => props.navigation.navigate("GameDetails")} key={game.id} gameDetails={game} />)}
        {gamesTab === 'paidmode' &&
          paidGames.map(game => <ListItem onPress={() => props.navigation.navigate("GameDetails")} key={game.id} gameDetails={game} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
