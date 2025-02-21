
import './App.css'
import TaskList from './Components/TaskList'
import { TaskProvider } from './Components/TaskContext'
// import Tasks from './Components/Tasks'

function App() {
  return (
    <TaskProvider>
    <>
      <TaskList/>
    </>
    </TaskProvider>
    
  )
}

export default App
