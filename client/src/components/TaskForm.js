import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

const TaskForm = () => {
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
                        <form action="">
                            <TextField 
                                variant='filled'
                                label='Write your title'
                                sx={{
                                    display: 'block',
                                    margin: '.5rem 0'
                                }}
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
