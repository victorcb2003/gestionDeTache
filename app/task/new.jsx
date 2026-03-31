import { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Redirect } from 'expo-router'
import { useApp } from '../../contexte/AppProvider'


export default function addTask() {
    const {tasks,setTasks, current} = useApp()
    const [name,setName] = useState("")
    const [currentTasks,setCurrentTasks] = useState([])
    
    if (!current) return <Redirect href={"connection"} />

    function handleSubmit() {
        if (!name.trim()) return

        currentTasks.forEach(element => {
            if (element.name == name) return
        });

        setTasks([...tasks,{name,check:false,email:current}])

        setTimeout(()=>{
            <Redirect href={"tasksdisplay"}/>
        },1000)
    }

    useEffect(()=>{
        setCurrentTasks(tasks.filter(t=> t.email == current))
    },[tasks])


  return (
    <View>
        <Text>
           Ajouter une task 
        </Text>
        <View>
            <Text>Nom :</Text>
            <TextInput
            value={name}
            placeholder='Name'
            onChangeText={setName}
            />
        </View>
        <Pressable onPress={()=>handleSubmit()}>
            <Text>Ajouter la task</Text>
        </Pressable>
    </View>
  )
}
