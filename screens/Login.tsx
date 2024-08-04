
import React from 'react'
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Key from 'react-native-vector-icons/FontAwesome5';
import { Link } from 'expo-router';
export default function Login() {
  return (
    <SafeAreaView>
    {/* <ScrollView className="bg-white"> */}

    <View className="w-full h-full bg-white">

        <View className="relative ">
            <View className="">
                <ImageBackground className="object-contain w-full h-64 "
                    source={require("./../public/images/audiologo.jpg")}
                />
            </View>
            <View className="absolute top-28 left-8">
                <View>
                    <Text className="text-[30px] text-white  font-bold">
                        Welcome
                    </Text>
                </View>
                <View>
                    <Text className=" text-[30px] text-white  font-bold">
                        Back
                    </Text>
                </View>
                <View className="mt-5">
                    <Text className=" text-[15px]  text-white  font-bold">
                        Sign in to continue ...
                    </Text>
                </View>
            </View>
        </View>

        <View className="px-8 mt-6">
            {/* test  */}
            {/* <View className="flex-row items-center w-full my-5 border-b border-gray-300 rounded-lg">
            <View className="p-2">
                <Icon name="email" size={30} color="#9E9C9B" />
            </View>
            <View className="w-full ">
                <TextInput
                    className=" text-[#202544] sm:text-sm  block p-2.5 "
                    placeholder="Enter Your email"
                    keyboardType='email-address'
                />
            </View>
        </View> */}

            {/* email  */}
            <View className="flex-row items-center w-full my-5 border border-gray-300 rounded-lg bg-gray-50">
                <View className="p-2 border-r border-r-[#ec4c15]">
                    <Icon name="email" size={30} color="#ec4c15" />
                </View>
                <View className="w-full ">
                    <TextInput
                        className=" text-[#202544] sm:text-sm  block p-2.5 "
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Enter Your email"
                        keyboardType='email-address'
                    // keyboardType="numeric"
                    />
                </View>
            </View>
            {/* password  */}
            <View className="flex-row items-center w-full border border-gray-300 rounded-lg bg-gray-50">
                <View className="p-2 border-r border-r-[#ec4c15]">
                    <Key name="key" size={30} color="#ec4c15" />
                </View>
                <View className="w-full ">
                    <TextInput
                        className=" text-[#202544] sm:text-sm  block p-2.5 "
                        // onChangeText={onChangeNumber}
                        // value={number}
                        placeholder="Enter Your Password"

                    // keyboardType="numeric"
                    />
                </View>
            </View>
            {/* forgot password  */}
            <View className="my-3 mb-9">
                <TouchableOpacity>
                    <Text className="text-[#202544] text-lg text-right">
                        Forgot Password ?
                    </Text>
                </TouchableOpacity>
            </View>
            <Link href="/dashboard" asChild>
            <TouchableOpacity className="w-full duration-150 " 
            // onPress={() => { navigation.navigate('Choose') }}
            >
                <Text className="bg-[#ec4c15] mb-5 text-white text-center p-3 text-lg flex gap-2 rounded-lg">
                    Login
                </Text>
            </TouchableOpacity>
            </Link>

            <View className="my-3">
                <View>
                    <Text className="inset-x-0 px-2 mx-auto mb-5 text-sm text-center w-fit bg-red">Or
                        continue with</Text>
                </View>

                <View className="flex-row justify-between w-full ">
                    <View className="w-[48%] mr-1">
                        <TouchableOpacity className="w-full  py-2.5 border rounded-lg duration-150 " 
                        // onPress={navigation.navigate.openDrawer}  
                        >
                            <Text className="text-[#ec4c15] text-center text-lg p-2 mb-1">
                                Google
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-[48%]">
                        <TouchableOpacity className="w-full py-2.5 border rounded-lg duration-150 " >
                            <Text className="text-[#ec4c15] text-center text-lg p-2 mb-1">
                                Facebook
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>

        <View className="px-8 my-16">
            <View>
                <Text className="text-center">Dont't have an account ? </Text>
                <TouchableOpacity 
                // onPress={() => { navigation.navigate('Signup') }}
                >
                    <Text className="text-center underline text-lg text-[#ec4c15]">Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    {/* </ScrollView> */}
</SafeAreaView>
  )
}