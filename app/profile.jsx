import { useApp } from '../contexte/AppProvider'
import { Pressable, TextInput, View, Text } from 'react-native'
import { useState } from 'react'
import { style } from '../styles/connetion'
import { Redirect } from 'expo-router'

export default function profile() {
    const {user,setUser, current} = useApp()
    const [isOpen,setIsOpen] = useState(false)
    const [currentPassword,setCurrentPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const currentUser = user.filter(u=>u.email == current)[0]
    console.log(currentUser)

    if (!current) return <Redirect href={"connection"} />

    function handleSubmit() {
        if (currentUser.password != currentPassword) return

        if (newPassword != confirmPassword) return

        const Users = [...user]

        Users.forEach(u=>{ if(u.email == current) u.password = newPassword})

        setUser(Users)

        setIsOpen(false)
    }

  return (
    <View style={style.conteiner}>
        <Text>username : {current}</Text>
        <Pressable style={{width:"100%", alignItems: "center"}} onPress={()=>setIsOpen(true)}>
            <Text style={style.button}>
                Change password
            </Text>
        </Pressable>
        {isOpen && (
            <View>
                <TextInput
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder='current password'
                />
                <TextInput
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder='new password'
                />
                <TextInput
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder='confirm password'
                />
                <Pressable onPress={()=>handleSubmit()}>
                    <Text>
                        Changer de mot de passe
                    </Text>
                </Pressable>
            </View>

        )}
    </View>
  )
}
