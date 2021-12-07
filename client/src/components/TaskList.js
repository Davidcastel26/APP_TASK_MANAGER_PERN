//REACT
import { useEffect, useState } from "react"
//MATERIAL UI
import { Button,
         Card,
         CardContent,
         Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"

          
const TaskList = () => {
  //USE STATE
  const [tasks, setTasks] = useState([])
  //USE NAVIGATE
  const navigate = useNavigate()
  //FUNCTIONS
  const loadTasks = async() =>{
    const response = await fetch(`http://localhost:4000/tasks`);
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async(id)=>{
    try {
          //deleting the info in the backend
        await fetch(`http://localhost:4000/tasks/${id}`,{
          method:"DELETE",
        })
      //deleteing in the frontend
        setTasks(tasks.filter(task => task.id !== id ))
      // const data = await response.json()
      // console.log(data);
      // console.log(response);
    } catch (error) {
        console.log(error);      
    }
  }

  useEffect(()=>{
    loadTasks()
  }, [])

  return (
        <>
          <h1>Task List</h1>
          {
            tasks.map(task => (
              <Card 
                style={{ marginBottom:".7rem", backgroundColor:"#1e272e"
              }}>
                <CardContent 
                  style={{
                    display:"flex", 
                    justifyContent:"space-between"
                  }}
                  key={task.id}
                >
                  
                  <div style={{ color:"white"}}>
                  <Typography>{task.title}</Typography>
                  <Typography>{task.description}</Typography>
                  </div>
                  <div>
                  <Button 
                    variant="contained"
                    color="inherit"
                    onClick={()=> navigate(`/tasks/${task.id}/edit`)}
                  >
                    EDIT
                  </Button>
                  <Button 
                    variant="contained"
                    color="warning"
                    onClick={()=>handleDelete(task.id)}
                    style={{ marginLeft:".5rem" }}
                  >
                    DELETE
                  </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </>
    )
}

export default TaskList
