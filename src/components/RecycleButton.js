import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const RecycleButton = ({navigation}) => {
  return (
    <View style={tw`flex-1 items-center h-0`}>
    <View style={tw`w-15 h-15 mt-[-30]`}>
      <TouchableWithoutFeedback style={tw` shadow-md`}>
        <View style={tw`flex justify-center items-center bg-[#ebebeb] w-15 h-15 rounded-full`}>
            <Image source={require("../assets/images/recycle-sign.png")} style={tw`h-10 w-10`}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
    </View>
  )
}

export default RecycleButton