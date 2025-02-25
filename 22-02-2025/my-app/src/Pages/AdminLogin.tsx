import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import BackToHomeButton from '../Components/BackToHomeButton';

const AdminLogin : React.FC = () => {
    const [username,setUserName] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(username==='admin' && password === 'password'){
            navigate('/adminPage');
        }
        else{
            alert('Invalid credentials...Please try agian');
        }
    }
   
  return (
    <>
        <BackToHomeButton/>
        <br/>
        <div className='admin-login'>
            <form onSubmit={handleLogin}>
                Username : <input type='text' placeholder='Enter the Username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <br/>
                <br/>
                Password : <input type='password' placeholder='Enter the Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                <button type='submit'>Login</button>
            </form>
        </div>

    </>
  )
}

export default AdminLogin