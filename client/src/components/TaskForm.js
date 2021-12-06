import { Card, Grid, Typography } from '@mui/material';

const TaskForm = () => {
    return (
        <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Grid item xs={3}>
                <Card>
                    <Typography>
                        CREATE TASK HERE!   
                    </Typography>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm
