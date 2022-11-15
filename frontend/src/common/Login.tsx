import React from 'react'
import { useParams } from 'react-router-dom';
import LoginCard from './Login/LoginCard';
import SignupCard from './Login/SignupCard';
const Login = () => {
    const {props}=useParams();

     
    if(props==="true")
    {
        return(
            <LoginCard/>
        )
    }
    else
    {
        return(
            <SignupCard/>
        )
    }
}

export default Login