import { useState } from 'react'
import { Button, Container, Alert, Form } from "react-bootstrap";
import reactLogo from './assets/react.svg'
import './App.css'

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if(username == "user123" && password == "password123"){
      console.log("logged in");
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <Container>
      {
      error ? 
        <Alert variant="danger">
          That was the wrong username and/or password
        </Alert>
      : 
        <div>Welcome to the app</div>
      }
      <Form onSubmit={(e) => handleLogin(e)}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            onChange={(e) => setUsername(e.target.value)} 
            type="text" 
            placeholder="Enter your username" 
            name="username" 
          />
        </Form.Group>        
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            onChange={(e) => setPassword(e.target.value)} 
            type="password" 
            name="password" 
            placeholder="Enter your password" 
          />
        </Form.Group>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" /> */} 
        <div className="d-grid gap-2">
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </Container>
  )
}

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
