//react
import {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
//ui
import { Button,
         Card,
         CardContent,
         Grid,
         TextField,
         Typography,
         CircularProgress } from '@mui/material';

const TaskForm = () => {

    //REACT 
    //useState -------------- ------------------------------------------------------
    
    const [task, setTask] = useState({
        title:'',
        description:''
    })

    const [loading, setLoading] = useState(false);
    const [editing, setEdditing] = useState(false)

    //REACT TOUTER DOM -----------------------------------------------------------
    
    const navigate = useNavigate()
    const params = useParams()

    //Handelers ------------------------------------------------------------------

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // console.log('submit');
        setLoading(true)

        if(editing){
            const response = await fetch(`http://localhost:4000/${params.id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(task)
            })
            const data = await response.json();
            console.log(data);
        }else{
            await fetch("http://localhost:4000/tasks", {
                method: "POST",
                body: JSON.stringify(task),
                headers:{'Content-Type':'application/json'}
            })            
        }

        // await res.json();
        // console.log(data);

        setLoading(false)
        navigate('/')
    }

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
    }
    
    //hook effect ---------------------------------------------------------------

    const loadTask = async(id)=>{
        const respons = await fetch(`http://localhost:4000/tasks/${id}`)
        const data = await respons.json();
        // console.log(data)
        setTask({title: data.title, description:data.description})
        setEdditing(true)
    }

    useEffect(()=>{
        // console.log(params );
        if(params.id){
            // console.log('fetch tasks');
            loadTask(params.id);
        }
    }, [params.id])    


    // return -----------------------------------------------------------------
    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item xs={3}>
                <Card
                    sx={{mt:5}}
                    style={{
                        backgroundColor:'#1e272e',
                        padding: '1rem'
                    }}
                >
                    <Typography variant='5' textAlign='center' color='white'>
                        {editing ? "Edit TASK": "CREATE TASK HERE!"}   
                    </Typography>
                    <CardContent>
                        <form action="" onSubmit={handleSubmit}>

                            <TextField 
                                variant='filled'
                                label='Write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='title'
                                value={task.title}
                                onChange={handleChange}
                                inputProps={{style:{color:"white"}}}
                                InputLabelProps={{style:{color:"white"}}}
                            />

                            <TextField
                                variant='filled'
                                label='Write your description'
                                multiline
                                rows={4}
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
                                name='description'
                                value={task.description}
                                onChange={handleChange}
                                inputProps={{style:{color:"white"}}}
                                InputLabelProps={{style:{color:"white"}}}
                            />

                            <Button 
                                variant='contained' 
                                color='primary' 
                                type='submit'
                                disabled={!task.title || !task.description}
                            >
                                {loading ? (<CircularProgress
                                        color='inherit'
                                        size={24}
                                    />): (
                                    "SAVE"
                                
                                )}
                            </Button>
                        
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm
