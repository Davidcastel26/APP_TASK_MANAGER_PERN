//react
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//ui
import { Button,
         Card,
         CardContent,
         Grid,
         TextField,
         Typography } from '@mui/material';

const TaskForm = () => {

    //REACT 
    //useState
    const [task, setTask] = useState({
        title:'',
        description:''
    })
    //useEffect

    //to navigate
    const navigate = useNavigate()

    //Handelers

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // console.log('submit');

        const res = await fetch("http://localhost:4000/tasks", {
            method: "POST",
            body: JSON.stringify(task),
            headers:{'Content-Type':'application/json'}
        })
        const data = await res.json();
        // console.log(data);

        navigate('/')
    }

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value);
        setTask({...task, [e.target.name]: e.target.value})
    }



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
                        CREATE TASK HERE!   
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
                                onChange={handleChange}
                                inputProps={{style:{color:"white"}}}
                                InputLabelProps={{style:{color:"white"}}}
                            />

                            <Button variant='contained' color='primary' type='submit'>
                                Save
                            </Button>
                        
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm
