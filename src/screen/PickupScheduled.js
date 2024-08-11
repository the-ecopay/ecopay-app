import { View, Text,SafeAreaView,Image } from 'react-native'
import React from 'react'
import Animated,{FadeInDown} from 'react-native-reanimated'
import tw from 'twrnc'
import { capitalizeFirstLetter, fontStyles, isEmpty } from '../utils/utils'

const PickupScheduled = ({route,navigation}) => {
  const {data}=route.params
  uploadedImages=data.images[0].image
  const recyclableObjects=data.ai_json_response['Recyclable / Reusable Objects']
  const nonRecyclableObjects=data.ai_json_response['Non-Recyclable Objects']
 
  return (
    <SafeAreaView style={tw`flex-1 bg-[#F6FDC3]`}>
      <Animated.View entering={FadeInDown} style={tw`flex justify-between px-4 mt-4 flex-row items-center`} >
            <Text style={[tw`text-[#004225]`,fontStyles.subHeading]}>Pickup Scheduled</Text>
      </Animated.View>

      <View style={tw`bg-white p-3 rounded-md m-2 `}>

        <View style={tw`flex-row items-center justify-between`}>
          {/* pickup details */}
          <View style={tw`w-[65%]`}>
            <Text style={[tw``,fontStyles.text]}>Out for Pickup</Text>
            <Text style={[tw``,fontStyles.heading]}>Scheduled Today</Text>
            
            <Text style={[tw``,fontStyles.midtext]}>Pickup Location:</Text>
            <Text style={[tw``,fontStyles.text]}>1301 1st St Campbell CA 00903</Text>
          
            {!isEmpty(recyclableObjects)&&
            <>
              <Text style={[tw`pt-3 text-[#387F39]`,fontStyles.midtext]}>Recyclable Items:</Text>
              <Text style={[tw``, fontStyles.text]}>
              {Object.keys(recyclableObjects).map((category, index) => (
                `${recyclableObjects[category].map(item => capitalizeFirstLetter(item)).join(', ')}${index < Object.keys(recyclableObjects).length - 1 ? ', ' : ''}`
              ))}
              </Text>
            </>
          }

            {!isEmpty(nonRecyclableObjects)&&
            <>
              <Text style={[tw`pt-3 text-[#E8751A]`,fontStyles.midtext]}>Non-Recyclable Items:</Text>
              <Text style={[tw``, fontStyles.text]}>
              {Object.keys(nonRecyclableObjects).map((category, index) => (
                `${nonRecyclableObjects[category].map(item => capitalizeFirstLetter(item)).join(', ')}${index < Object.keys(nonRecyclableObjects).length - 1 ? ', ' : ''}`
              ))}
              </Text>
            </>
          }
          </View>

          {/* pickup image */}
          <View>
            <Image source={{uri:uploadedImages}} style={tw`h-20 w-20`}/>
          </View>
        </View>

        <View style={tw`pt-3`}>
          <Text style={[tw`text-black`,fontStyles.midtext]}>Note:</Text>
          <Text style={[tw`text-[#FF8225]`,fontStyles.text]}>1. Please separate non-recyclable objects, as they will not be recycled or picked up by our team.
          </Text>
          <Text style={[tw`text-[#387F39]`,fontStyles.text]}>2. Payment will be made only for recycled items based on their weight.
          </Text>
        </View>



      </View>
      
    </SafeAreaView>
  )
}

export default PickupScheduled