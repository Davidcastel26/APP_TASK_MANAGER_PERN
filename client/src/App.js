import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<TaskList/>} />
        <Route path='/tasks/new' element={<TaskForm/>} />
        {/* edit route */}
      </Routes>
     </BrowserRouter>
    </div>
  )
}



export default App
