import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ItemsContainer({todos,deleteToDo}){
    
  

    // useEffect(()=>{
        
    //     const itemsAfterRefresh = JSON.parse(localStorage.getItem('todos'))
    //     console.log(itemsAfterRefresh)
    //     localStorage.setItem('todos',JSON.stringify(itemsAfterRefresh))
    // },[])
    
   
    
    

    
  
    
   
   
    return(
        <div>
            <ul>
                {todos.map((item,index)=>{
                    return(
                        <Card style={{ width: '18rem' }} key={item}>
                        <ListGroup variant="flush">
                          <ListGroup.Item  style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>{item}
                        <Button onClick={()=>deleteToDo(item)}>Done</Button>
                         </ListGroup.Item>
                          
                        </ListGroup>
                      </Card>
                        
                    )
                })}
            </ul>
        </div>
    )
}