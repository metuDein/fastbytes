import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../../context/DataContext'
import useAuth from '../../hooks/useAuth'

const Adminlogin = () => {
    const {setAuth} = useAuth()
    const navigate = useNavigate()

    const {admins} = useContext(DataContext)

    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')

    const handleAdminLogin = (e) => {
        e.preventDefault()
        if(!email || !password) return window.alert('all field required');
        
        const result = admins.find( admin => {
            return admin.email === email && admin.password === password 
        })
        if(!result) return window.alert('incorrect username or password');
        console.log(result)
        setAuth({
            email : email,
            password : password
        })
        setEmail('')
        setPassword('')
        window.alert('login succeful')
        navigate('/admin-panel')
    }


  return (
    <section className='track--sect'>
            <div className='track--form'>
                <form onSubmit={handleAdminLogin}>
                    <input type="email" placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder='Enter password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button> search </button>
                </form>

            </div>
            </section>
  )
}

export default Adminlogin