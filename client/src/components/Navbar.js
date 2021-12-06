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
                        <Typography sx={{ flexGrow: 1}}>
                            <Link to='/'>
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
