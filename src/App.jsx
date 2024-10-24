
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react'
import InputContainer from './components/InputContainer'

import './App.css'
import ItemsContainer from './components/ItemsContainer';
import Count from './components/Count';

function App() {
  const [todos, setTodos] = useState(()=>{
    const savedTasks = localStorage.getItem('todos')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  
  

  const addNewToDo = (newToDo) =>{
    setTodos([...todos, newToDo])
  }
  const deleteToDo =(itemToBeDeleted) =>{
    const filteredToDo = todos.filter((item)=>{
      return item !== itemToBeDeleted
    })
    setTodos(filteredToDo)
  }
  return (
   <div>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight:"700"}}>MY TODO LIST</Navbar.Brand>
        </Container>
        <Container style={{display:"flex", justifyContent:"flex-end"}}>
          <Count length={todos.length}/>
        </Container>
      </Navbar>
     

    <InputContainer addNewToDo={addNewToDo}/>
    <ItemsContainer todos={todos} deleteToDo={deleteToDo}/>
    
   </div>
  )
}

export default App
