import { createContext, useState, useContext } from "react"

const Contexte = createContext()

export function AppProvider({children}) {
    const [user,setUser] = useState([])
    const [current,setCurrent] = useState(null)
    const [tasks,setTasks] = useState([])

  return (
    <Contexte.Provider value={{user,setUser,current,setCurrent, tasks,setTasks}}>
        {children}
    </Contexte.Provider>
  )
}

export const useApp = () => useContext(Contexte);