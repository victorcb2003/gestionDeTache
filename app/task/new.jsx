import { useEffect, useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'
import { Redirect } from 'expo-router'
import { useApp } from '../../contexte/AppProvider'
import { style } from '../../styles/task'
import { useRouter } from 'expo-router'

export default function addTask() {
    const {tasks,setTasks, current} = useApp()
    const [name,setName] = useState("")
    const [currentTasks,setCurrentTasks] = useState([])
    const route = useRouter()
    
    if (!current) return <Redirect href={"connection"} />

    function handleSubmit(isPublic) {

        console.log("in1")
        if (!name.trim()) return


        let valide = true
        currentTasks.forEach(element => {
            if (element.name == name) valide = false
        });

        console.log("in2",valide)

        if (!valide) return

        console.log("in3")

        setTasks([...tasks,{name,check:false,email:current,public:isPublic}])
        route.push('task')
    }

    useEffect(()=>{
        setCurrentTasks(tasks.filter(t=> t.email == current))
    },[tasks])


  return (
    <View style={{padding : 50, gap : 20}}>
        <View style={style.inputs}>
            
            <TextInput
            value={name}
            placeholder='Name'
            onChangeText={setName}
            />
            
        </View>
        <Pressable style={{width:"100%", alignItems:"center"}} onPress={()=>handleSubmit(false)}>
            <Text style={style.button}>Ajouter la task en privée</Text>
        </Pressable>
        <Pressable style={{width:"100%", alignItems:"center"}} onPress={()=>handleSubmit(true)}>
            <Text style={style.button}>Ajouter la task en public</Text>
        </Pressable>
    </View>
  )
}
