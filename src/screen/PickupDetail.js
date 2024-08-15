import React from 'react'
import { capitalizeFirstLetter, fontStyles, isEmpty } from '../utils/utils'
import Animated, { ColorSpace, FadeInDown } from 'react-native-reanimated';
import { View, Text ,SafeAreaView,StatusBar, TouchableOpacity,ScrollView, Image} from 'react-native'
import tw from 'twrnc'
import { StopCircleIcon } from 'react-native-heroicons/solid';

const PickupDetail = ({route,navigation}) => {
  const {data}=route.params

  const getImage=(item)=>{
    switch(item) {
      case 'Plastic':
        return require('../assets/images/plastic.png');
      case 'Metal':
        return require('../assets/images/metal.png');
      case 'Paper':
        return require('../assets/images/paper.png');
      case 'Electronics':
        return require('../assets/images/electronic-waste.png');
      case 'Wood':
        return require('../assets/images/electronic-waste.png');
      default:
        return require('../assets/images/non-recyclable-bucket.png');
    }
  }
  const getRates=(item)=>{
    switch(item) {
      case 'Plastic':
        return '15-10/kg';
      case 'Metal':
        return '15-10/kg';
      case 'Paper':
        return '15-10/kg';
      case 'Electronics':
        return '15-10/kg';
      default:
        return null
    }
  }

  const recyclableObjects=data.ai_json_response['Recyclable / Reusable Objects']
  const nonRecyclableObjects=data.ai_json_response['Non-Recyclable Objects']
  console.log(nonRecyclableObjects)
  
  return (
    <SafeAreaView style={tw`flex-1 bg-[#F6FDC3]`}>
        <StatusBar backgroundColor={'#F6FDC3'}/>

        {/* header */}
        <Animated.View entering={FadeInDown} style={tw`flex justify-between px-4 mt-4 flex-row items-center`} >
            <Text style={[tw`text-[#004225]`,fontStyles.subHeading]}>Analyzed Items</Text>
            <TouchableOpacity style={tw`bg-[#508D4E] px-3 py-3 rounded-full`}>
              <Text style={[tw`text-white`,fontStyles.text]}>View Image</Text>
            </TouchableOpacity>
        </Animated.View>

        {/* content */}
        <ScrollView style={tw`flex m-4 mb-25`} > 
          
          {/* Recyclable render */}
        {!isEmpty(recyclableObjects)&&
          <View style={tw`bg-white p-4 rounded-xl`}>

            <View style={tw`flex-row items-center gap-x-4 bg-[#fffff]`}>
                <Image source={require('../assets/images/recycling.png')} style={tw`h-10 w-10`}/>
                <Text style={[tw``,fontStyles.subHeading]}>Recyclable Objects</Text>
              </View>

              {/* Recyclable Objects list */}
                {Object.keys(recyclableObjects).map((category, index) => (
                <View style={tw`flex flex-row mt-5 px-2 items-center`} key={index}>
                  <Image source={getImage(category)} style={tw`h-15 w-15`}/>
                  <View style={tw`pl-5 mb-4`}>
                    {/* list heading */}
                    <Text style={[tw`mb-2`, fontStyles.medium]}>
                      {category}
                    </Text>

                    {/* list items */}
                    {recyclableObjects[category].map((item, itemIndex) => (
                      <View key={itemIndex} style={tw`flex-row items-center`}>
                        <StopCircleIcon size={10} color={'black'} />
                        <Text style={[tw`pl-1`, fontStyles.midtext]}>{capitalizeFirstLetter(item)}</Text>
                      </View>
                    ))}
                  </View>

                  {/* <View style={tw`pl-20`}>
                    <Text>Rate:</Text>
                    <Text>{getRates(category)}</Text>
                  </View> */}
                </View>
                ))}
          </View>
          }

        {!isEmpty(nonRecyclableObjects)&&
          <>
          {/* Non Recyclable render */}
          <View style={tw`bg-white p-4 rounded-xl mt-5`}>

            <View style={tw`flex-row items-center gap-x-4`}>
              <Image source={require('../assets/images/non-recyclable.png')} style={tw`h-10 w-10`}/>
              <Text style={[tw``,fontStyles.subHeading]}>Non-Recyclable Objects</Text>
            </View>

            
            {Object.keys(nonRecyclableObjects).map((category, index) => (
                <View style={tw`flex flex-row mt-5 px-2 items-center`} key={index}>
                  <Image source={getImage(null)} style={tw`h-15 w-15`}/>
                  <View style={tw`pl-5 mb-4`}>
                    {/* list heading */}
                    <Text style={[tw`mb-2`, fontStyles.medium]}>
                      {category}
                    </Text>
                    {/* list items */}
                    {nonRecyclableObjects[category].map((item, itemIndex) => (

                      <View key={itemIndex} style={tw`flex-row items-center`}>
                        <StopCircleIcon size={10} color={'black'} />
                        <Text style={[tw`pl-1`, fontStyles.midtext]}>{capitalizeFirstLetter(item)}</Text>
                      </View>
                    ))}
                  </View>
                </View>
                ))}          
            </View>
          </>
        }
        </ScrollView>


        {/* footer */}

        {/* schedule pickup button */}
        <View style={tw`h-25 w-[100%] flex justify-center items-center bottom-0 absolute`}>
          <Text style={[tw`text-center text-[#E68369]`,fontStyles.text]}>The items detected by AI may be irrelevant or include unwanted items.</Text>
          <TouchableOpacity style={tw`bg-[#508D4E] px-20 py-3 rounded-full`} onPress={()=>navigation.navigate('PickupScheduled',{'data':data})}>
            <Text style={[tw`text-white`,fontStyles.subHeading]}>Schedule Pickup</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default PickupDetail