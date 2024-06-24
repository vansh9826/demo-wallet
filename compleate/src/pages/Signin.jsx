import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import InputBox from '../components/InputBox'
import { Button } from '../components/Button'
import { BottomWarning } from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
        <div className='flex flex-col justify-center'>
            <div className='w-80 rounded-lg h-max px-4 p-2 text-center bg-white'>
            <Heading label={'signIn'}/>
            <InputBox onChange={(e)=>{
              setUsername(e.target.value)
            }} label={'UserName'} placeholder={'username'}/>
            <InputBox onChange={(e)=>{
              setPassword(e.target.value)
            }} label={'password'} placeholder={"*******"}/>
            <div className='pt-6'>
                <Button onClick={async ()=>{
                  const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                  })
                  localStorage.setItem('token',response.data.token)
                  navigate("/dashboard")
                }} label={'signIn'}/>
            </div >
            <BottomWarning label={'create an account'} buttonText={'signUp'} to={'/signup'}/>
            </div>
        </div>
      
    </div>
  )
}

export default Signin
