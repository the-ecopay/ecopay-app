import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#FBF6EE]`}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen