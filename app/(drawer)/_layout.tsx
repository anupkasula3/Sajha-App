import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Drawer } from 'expo-router/drawer'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { router } from 'expo-router'

const CustomDrawerContent=(props:any)=>{
  return (

 
  <DrawerContentScrollView {...props}> 
  <DrawerItem  
  label={() => ( 
          <View
            style={{
            
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Dashboard</Text>
          </View>
        )}
 onPress={()=>{
  router.push('/dashboard')
}} />
<DrawerItem onPress={()=>{
  router.push('/profile')
}} label={'profile'}/>

<DrawerItem onPress={()=>{
  router.push('/Test')
}} label={'Test'}/>

  </DrawerContentScrollView>
   );
}
export default class _layout extends Component {


  render() {
    return (
     <Drawer drawerContent={(props)=><CustomDrawerContent {...props}/>}/>
    )
  }
}
