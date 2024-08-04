import { Link } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

const index = () => {
 
  return (
    <View className="top-[25%]">
 
    <View className="items-center">
        <ImageBackground className="w-40 h-40 "
            source={require("../public/images/audiologo.png")}
        />
    </View>
    <View className="mt-5">
        <Text className="text-center text-[#ec4c15] text-[38px] font-extrabold" >Audio</Text>

        <Text className="text-center text-[#202544]  text-[30px] font-medium">Book</Text>
    </View>
    <View className="items-center mt-52">
        <Link href="/login" asChild>
        <TouchableOpacity className="bg-[#ec4c15]  text-center  w-[75%] flex gap-2 items-center rounded-md" >
            <Text className="p-2 mb-1 text-lg text-white">
                Get Started
            </Text>
        </TouchableOpacity>
        </Link>
        {/* <TouchableOpacity className="bg-[#ec4c15] text-center p-3 w-1/2  flex gap-2 items-center rounded-full" onPress={() => { navigation.navigate('Signup') }}>
            <Text className="text-lg text-white">
                Signup
            </Text>
        </TouchableOpacity> */}
    </View>

</View>
  )
}

export default index
