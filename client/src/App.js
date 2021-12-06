import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Navbar from "./components/Navbar"
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

// UI
import { Container } from '@mui/material'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* WE ARE USEING THE CONTAINER FOR THE UI DESING  ------------------------------------ */}
        <Container>
          {/* WE ARE SETTING THE ROUTES RIGHT HERE -----------------------------------------   */}
          <Routes>
            <Route path='/' element={<TaskList/>} />
            <Route path='/tasks/new' element={<TaskForm/>} />
            {/* edit route */}
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}



export default App
