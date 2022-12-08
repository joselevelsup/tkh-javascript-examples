import { useState } from 'react'
import { Button, FormControl, Input, FormLabel, Alert, AlertIcon } from "@chakra-ui/react";
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
    <div>
      {
      error ? 
      <Alert status='error'>
        <AlertIcon />
        That was the wrong username and/or password
      </Alert>
      : 
        <div>Welcome to the app</div>
      }
      <form onSubmit={(e) => handleLogin(e)}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type='text' onChange={(e) => setUsername(e.target.value)} name="username" />
        </FormControl>
        <FormControl marginBottom={10}>
          <FormLabel>Password</FormLabel>
          <Input type='password' onChange={(e) => setPassword(e.target.value)} name="password" />
        </FormControl>
        {/* <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" />
        <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" /> */}
        {/* <input type="submit" value="Login" /> */}
        <Button type="submit" colorScheme='blue' width="100%">Login</Button>
      </form>
    </div>
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
