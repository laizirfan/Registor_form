import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [username,setusername]=useState(0)
  const [password,setpassword]=useState(0);
  const [email,setemail]=useState("")
  const [message,setMessage] = useState(" ");
 
  //conditionally render

  const [isusername,setisusername]=useState(true)
  
  const [ispassword,setispassword]=useState(true)
  
 
   function handleEmail(event){
    let inputValue = event.target.value;
    setemail(inputValue);

    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      setMessage("Error! you have entered invalid email.");
    } else {
      setMessage("");
    }
   }

  const validate=(e)=>{
    const {name,value}=e.target 
    console.log(name);
    console.log(value);
    //regular

    // /console.log(!!value.match(/^[0-9a-zA-Z]$/));*/
   
    if(!!value.match("^[A-Za-z][A-Za-z0-9_]{7,29}$")){
     if(name=="username"){
      setusername(value)
      setisusername(true)
     }else if(name=="password"){
        setpassword(value)
        setispassword(true)
     }

    }else{
      if(name=="username"){
        setusername(value)
        setisusername(false)
       }else if(name=="password"){
          setpassword(value)
          setispassword(false)
       }
    }
  }
  const handleClick = ()=>{
    alert ('Register Successfully')
  }
  return (
    <>
      <div className='main'>
        <div className='sub p-5  begin'><h1 className='text-light d-flex justify-content-center'>Registration Form </h1>
        
        <form className='p-3' action=''>
          <TextField id="outlined-basic" label="Username" name='username'value={username||""} variant="outlined"  className='w-100 pb-4 ' onChange={(e)=>validate(e)}/>
          {!isusername &&<p className='text-danger'>Must enter 8 characters.uppercase,lowercase or numbers </p>}
          <TextField id="outlined-basic" label="Email" type='email' value={email} variant="outlined"className='w-100 pb-4' onChange={handleEmail} /> 
          <p className='text-danger'>{message}</p>
          <TextField id="outlined-basic" label="Password" name='password' value={password||""} variant="outlined" className='w-100 pb-4' onChange={(e)=>validate(e)}/>
          {! ispassword && <p className='text-danger'>Must enter 8 characters.uppercase,lowercase or numbers</p>}
          <Button variant="contained" color='success' onClick={handleClick} disabled={username && password && email?false:true}>Register</Button>
        
        
        </form>
        
        </div>
      </div>
       
    </>
  )
}

export default App