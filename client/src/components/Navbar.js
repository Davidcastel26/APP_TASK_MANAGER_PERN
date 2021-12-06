//REACT
import { Link, useNavigate } from 'react-router-dom'

// UI
import {Button, 
        Box, 
        AppBar, 
        Container, 
        Typography,
        Toolbar} from '@mui/material'


const Navbar = () => {

    const navigate = useNavigate()

    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position='state' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{ flexGrow: 1}}>
                            <Link to='/' style={{ textDecoration:'none', color:'whitesmoke'}}>
                                PERN Stack
                            </Link> 
                        </Typography>
                        <Button 
                            variant='contained' 
                            color='primary' 
                            onClick={ () => navigate("/tasks/new")}
                        >
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar
