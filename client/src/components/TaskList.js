import { useEffect } from "react"

const TaskList = () => {
    
  const loadTasks = async() =>{
    const response = await fetch(`http://localhost:4000/tasks`);
    const data = await response.json()
  }

  useEffect(()=>{

  }, [])

  return (
        <>
          <h1>Task List</h1>

        </>
    )
}

export default TaskList
