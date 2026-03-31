import { useState } from 'react'
import { View,Text,TextInput, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import { useApp } from '../contexte/AppProvider'
import { style } from '../styles/inscription'

export default function index() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user,setUser} = useApp()

    const route = useRouter()

    function handleSubmit() {
      if (!email.trim() || !password.trim()) return


      let valide = true
      user.forEach(element => {
        if (element.email == email) valide = true
      });

      if (!valide) return

      setUser([...user, {email,password,tasks:[]}])
      route.push("/")
    }
  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType='email'
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
            <Text  style={style.button}>inscription</Text>
        </Pressable>
    </View>
  )
}
