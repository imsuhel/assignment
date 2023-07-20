import {View, Image, StyleSheet} from 'react-native';
import Tabbar from '@mindinventory/react-native-tab-bar-interaction';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = () => {
  const tabs = [
    {
      name: '',
      activeIcon: (
        <Image
          source={require('../imgs/home.png')}
          style={internalStyle.iconStyle}
        />
      ),
      inactiveIcon: (
        <Image
          source={require('../imgs/home.png')}
          style={internalStyle.inactiveStyle}
        />
      ),
    },
    {
      name: '',
      activeIcon: (
        <Image
          source={require('../imgs/atmCard.png')}
          style={internalStyle.iconStyle}
        />
      ),
      inactiveIcon: (
        <Image
          source={require('../imgs/atmCard.png')}
          style={internalStyle.inactiveStyle}
        />
      ),
    },
    {
      name: '',
      activeIcon: (
        <Image
          source={require('../imgs/wallet.png')}
          style={internalStyle.iconStyle}
        />
      ),
      inactiveIcon: (
        <Image
          source={require('../imgs/wallet.png')}
          style={internalStyle.inactiveStyle}
        />
      ),
    },
    {
      name: '',
      activeIcon: (
        <Image
          source={require('../imgs/support.png')}
          style={internalStyle.iconStyle}
        />
      ),
      inactiveIcon: (
        <Image
          source={require('../imgs/support.png')}
          style={internalStyle.inactiveStyle}
        />
      ),
    },
  ];
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}>
      <Tabbar
        tabs={tabs}
        tabBarContainerBackground="#fff"
        tabBarBackground="#EDEEF0"
        activeTabBackground="#000000"
        labelStyle={{display: 'none'}}
        onTabChange={() => console.log('Tab changed')}
      />
    </View>
  );
};

export default BottomTab;
const internalStyle = StyleSheet.create({
  iconStyle: {resizeMode: 'contain', height: 28, width: 28, tintColor: '#fff'},
  inactiveStyle: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
    tintColor: '#000',
  },
});
