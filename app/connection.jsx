import { useState } from 'react'
import { View,Text,TextInput, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { useApp } from '../contexte/AppProvider'
import { style } from '../styles/connetion'

export default function Connection() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {setCurrent, user} = useApp()
    const route = useRouter()

    function handleSubmit(){

      if (!email.trim() || !password.trim()) return

      user.forEach(element => {
          if (element.email == email && element.password == password){
            setCurrent(email)

              return route.push("/")
          }
      })
    }

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='username ...'
        style={{borderWidth: 1, margin: 30}}
        />
        <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='password ...'
        style={{borderWidth: 1, margin: 30}}
        />
        <Pressable style={{width: "100%", alignItems:"center"}} onPress={()=>handleSubmit()}>
            <Text style={style.button}>Connection</Text>
        </Pressable>
    </View>
  )
}
