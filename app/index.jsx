import { useApp } from "@/contexte/AppProvider"
import { Link } from "expo-router"
import { View,Text, Pressable } from "react-native"
import {style} from '../styles/acceuil'
import { StyleSheet, FlatList } from "react-native"
import { useEffect, useState } from "react"

export default function Index() {
  const {current, setCurrent, tasks} = useApp()
  const [pTasks,setPTasks] = useState([])

  useEffect(()=>{
    setPTasks([...tasks.filter(t=>t.public)])
  },[tasks])


  const Item = ({item}) => (
    <View>
        <Pressable>
            {/* checkbox */}
        </Pressable>
        <Text>nom : {item.name} </Text>
        {item.email == current && (
          <Pressable onPress={()=>handleDelete(item.name)}>
            <Text style={style.button}>
                Supprimer
            </Text>
        </Pressable>
        )}
    </View>
);

  return (
    <View style={style.conteiner}>
      <Link style={style.button} href="connection">Connection</Link>
      <Link style={style.button} href="inscription">Inscritpion</Link>
      {current && (
        <>
          <Link style={style.button} href="task">tasks</Link>
          <Link style={style.button} href="profile">profile</Link>
          <Pressable style={{width:"100%", alignItems:"center"}} onPress={()=>setCurrent(null)}>
            <Text style={style.button}>
                logout
            </Text>
          </Pressable>
          
        </>
      )}
      <FlatList
      data={pTasks}
      keyExtractor={item=>item.name}
      renderItem={({item}) => <Item item={item} />}
      />
    </View>
  )
}
