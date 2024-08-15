import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { fontStyles } from '../utils/utils'

const PoweredGemini = () => {
  return (
    <View style={tw`flex flex-row items-center justify-center mt-10`}>
        <Text style={[tw``,fontStyles.text]}>Powered by</Text>
        <Image source={require('../assets/images/geminiai.png')} style={tw`h-10 w-15 mb-1`}/>
    </View>
    
  )
}

export default PoweredGemini