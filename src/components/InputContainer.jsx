import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container';

export default function InputContainer({addNewToDo}){
    const[inputValue, setInputValue] = useState('')


    return (
        <div>
           
    <InputGroup className="mb-3" style={{width:'50vw', margin:'auto'}}>

        <Form.Control
          placeholder="add an item"
          style={{margin:"1rem", outline:'none',border:"2px solid aliceblue incoming "} }
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
        />
        <Container style={{display:'flex',justifyContent:"center"}}>
            <Button onClick={()=>{addNewToDo(inputValue);
            setInputValue("")}}>Add Item</Button>
        </Container>
    </InputGroup>
   
   
    
        </div>

    )
}