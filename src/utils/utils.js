import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const fontStyles = {
    heading:{fontSize: hp(3),fontFamily:'NotoSans-Bold'},
    subHeading:{fontSize:hp(2.5), fontFamily:'NotoSans-SemiBold'},
    medium:{fontSize:hp(2), fontFamily:'NotoSans-SemiBold'},
    midtext:{fontSize:hp(1.8), fontFamily:'NotoSans-SemiBold'},
    text:{fontSize:hp(1.6), fontFamily:'NotoSans-SemiBold'},
    small:{ fontSize: hp(1.5), fontFamily: 'NotoSans-SemiBold'}
  };
  

export function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
};

export function capitalizeFirstLetter (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
};
