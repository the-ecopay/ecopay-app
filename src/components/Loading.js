import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import tw from 'twrnc'

const Loading = () => {
  return (
    <View style={tw`flex-1`}>
      <LottieView style={{flex:1}}  source={require('../assets/animations/loading.json')} autoPlay loop />
    </View>
  )
}

export default Loading