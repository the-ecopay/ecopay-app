import { View, Text,SafeAreaView ,Image,StatusBar, TouchableOpacity, ImageBackground, TouchableHighlight} from 'react-native'
import React,{useState} from 'react'
import tw from 'twrnc'
import { fontStyles, isEmpty } from '../utils/utils'
import {ArrowRightCircleIcon, CameraIcon, PhotoIcon, PlusCircleIcon, XCircleIcon } from 'react-native-heroicons/outline'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { detectImage } from '../api'
import Loading from '../components/Loading'

const RecycleScreen = ({navigation}) => {
    // const device=useCameraDevice('back');   
    const [loading, setLoading] = useState(false); 

    // if (device==null) return console.log('No Camera')
    const [cameraPhoto, setCameraPhoto] = useState([])

    const options={
        saveToPhotos:true,
        mediaType:'photo',
    }

    const handleUpload=async()=>{
        if (cameraPhoto){
          setLoading(true)
          try{
            const result =await detectImage(cameraPhoto)
            setLoading(false)
            navigation.navigate('PickupDetail',{'data':result})
          }catch(error){
            console.log(error)
            setLoading(false)
          }
        }
    }

    const openCamera= async ()=>{
        // const granted=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.Camera);

        // if (granted===PermissionsAndroid.RESULTS.GRANTED){
        // }
        const result = await launchCamera(options);
        if (result && result['didCancel']) return
        setCameraPhoto(cameraPhoto=>[...cameraPhoto,result.assets[0].uri])
    }

    const openImageGallery= async ()=>{
        // const granted=await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.Camera);

        // if (granted===PermissionsAndroid.RESULTS.GRANTED){
        // }
        const result = await launchImageLibrary();
        if (result && result['didCancel']) return
        setCameraPhoto(cameraPhoto=>[...cameraPhoto,result.assets[0].uri])
        
    }
    
  return (
    <SafeAreaView style={tw`flex-1 bg-[#F6FDC3]`}>
      <StatusBar backgroundColor={'#F6FDC3'}/>
      <View style={tw`flex flex-row items-center justify-center`}>
        <Text style={[tw`text-center mt-2 text-[#387F39]`,fontStyles.heading]}>Eco</Text>
        <Text style={[tw`text-center mt-2 text-[#FF9A00]`,fontStyles.heading]}>Pay</Text>
      </View>
      <View style={tw`flex justify-center items-center mt-10 gap-y-10`} >
        <Text style={[tw`text-[#004225]`,fontStyles.heading]}>Request Recycle</Text>
        
        {/* list camera taken/selected images */}
        {!isEmpty(cameraPhoto)&&
            cameraPhoto.map((photo,index)=>(
              <ImageBackground key={index} source={{uri:photo}} style={[{height:hp(35),width:hp(35)}]} imageStyle={{borderRadius:20}}>
                  <TouchableOpacity
                      onPress={()=> setCameraPhoto([])}
                      style={tw`absolute right-[-3] top-[-4] bg-white rounded-full`}
                    >
                      <XCircleIcon size={35} color={'#365E32'}/> 
                  </TouchableOpacity>

                </ImageBackground>
            ))
        }

        {!isEmpty(cameraPhoto)&&
          // add upload image button in small 
            // continue button
            <>
            {/* Add more images */}
            <View style={tw`flex flex-row gap-x-5`}>
            <TouchableOpacity disabled={loading} onPress={openCamera} style={[tw`bg-[#79AC78] w-[40%] py-[4%] mt-5 rounded-md flex flex-row items-center justify-center gap-x-2`]}>
              <CameraIcon size={hp(5)} color={'white'}/>
              <Text style={[tw`text-white text-center pr-2`,fontStyles.midtext]}>Click More</Text>
            </TouchableOpacity> 
            <TouchableOpacity disabled={loading} onPress={openImageGallery} style={[tw`bg-[#79AC78] w-[40%] py-[4%] mt-5 rounded-md flex flex-row items-center justify-center gap-x-2`]}>
              <PlusCircleIcon size={hp(5)} color={'white'}/>
              <Text style={[tw`text-white text-center pr-2`,fontStyles.midtext]}>Gallery</Text>
            </TouchableOpacity> 
            </View> 

            {/* Continue button to proceed */}
            {loading===true?
            <View style={[tw`bg-[#ECFFE6] w-[80%] px-10 h-[20] rounded-md flex flex-row items-center justify-center`]}>
              <Text style={[tw`text-black text-center pr-2`,fontStyles.subHeading]}>Detecting Image</Text>
              <Loading/>
            </View>
            :
            <TouchableOpacity onPress={handleUpload} style={[tw`bg-[#79AC78] w-[80%] py-[4%] mt-5 rounded-md flex flex-row items-center justify-center`]}>
              
              <Text style={[tw`text-white text-center pr-2`,fontStyles.subHeading]}>Continue</Text>
              <ArrowRightCircleIcon size={hp(5)} color={'white'}/>
              </TouchableOpacity> 
          }
            </>
        }

          {/* is no photo show image */}
          {isEmpty(cameraPhoto)&&
          <>
          <Image source={require('../assets/images/Messenger-pana.png')} style={{height:hp(35),width:hp(35)}}/>
            <TouchableOpacity onPress={openCamera} style={[tw`bg-[#79AC78] w-[80%] py-[4%] mt-5 rounded-md flex flex-row items-center justify-center`]}>
              <CameraIcon size={hp(5)} color={'white'}/>
              <Text style={[tw`text-white text-center pl-4`,fontStyles.subHeading]}>Take Scrap Image</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={openImageGallery}  style={[tw`bg-[#79AC78] w-[80%] py-[4%] rounded-md flex flex-row items-center justify-center`]}>
              <PhotoIcon size={hp(5)} color={'white'}/>
              <Text style={[tw`text-white text-center pl-4`,fontStyles.subHeading]}>Upload Scrap Image</Text>
          </TouchableOpacity>
          </>
          }
      </View>
    </SafeAreaView>
  )
}

export default RecycleScreen