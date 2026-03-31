import React, { useEffect, useState } from 'react'
import { View,Text, FlatList, Pressable } from 'react-native'
import { useApp } from '../../contexte/AppProvider'
import { Link, Redirect } from 'expo-router';
import { style } from '../../styles/task';

export default function tasksDisplay() {
    const {tasks, setUser, current} = useApp()
    const [currentTasks,setCurrentTasks] = useState([])

    if (!current) return <Redirect href={"connection"} />

    function handleDelete(name){
        setCurrentTasks(currentTasks.filter(t=>t.name!=name))
    }


    const Item = ({item}) => (
    <View>
        <Pressable>
            {/* checkbox */}
        </Pressable>
        <Text>nom : {item.name} </Text>
        <Pressable onPress={()=>handleDelete(item.name)}>
            <Text style={style.button}>
                Supprimer
            </Text>
        </Pressable>
    </View>
);

    useEffect(()=>{
        setCurrentTasks(tasks.filter(t=>t.email == current))
    },[tasks])

  return (
    <View style={style.conteiner}>
        {console.log(currentTasks.length)}
        {currentTasks.length == 0 ? (
            <Text>
                Aucune Task
            </Text>
        ):(
            <FlatList
            data={currentTasks}
            keyExtractor={item=>item.name}
            renderItem={({item}) => <Item item={item} />}
            />
        )}

        
        <Link style={style.button} href="task/new">Ajouter une task</Link>
    </View>
  )
}
