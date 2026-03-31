import { useApp } from "@/contexte/AppProvider"
import { Link } from "expo-router"
import { View,Text } from "react-native"
import {style} from '../styles/acceuil'
import { StyleSheet } from "react-native"

export default function Index() {
  const {current} = useApp()

  return (
    <View style={style.conteiner}>
      <Link style={style.button} href="connection">Connection</Link>
      <Link style={style.button} href="inscription">Inscritpion</Link>
      {current && (
        <>
          <Link style={style.button} href="task">tasks</Link>
          <Link style={style.button} href="profile">profile</Link>
        </>
      )}
    </View>
  )
}
