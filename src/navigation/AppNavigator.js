import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MainNavigator from './MainNavigator'


const AppNavigator = () => {
    // const {user}=useContext(UserContext)
    
    return (
      <>
      {/* <StatusBar backgroundColor="#2384FF" barStyle='white-content' />
      {isEmpty(user)?<LoginNavigator/>:<ViyatNavigator/>} */}
      <MainNavigator/>
      </>
    )
  } 

  export default AppNavigator;