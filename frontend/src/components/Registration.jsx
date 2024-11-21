import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' })

    let Registerhandler = async (e) => {
        e.preventDefault()
        let response = await axios.post('http://localhost:5000/register', user)
        console.log(response)
        console.log(user)
        setUser({ name: '', email: '', password: '' ,date:''})
    }
    let UserHandler = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="wrapper">
                <h1>Registration Page</h1>
                <form onSubmit={Registerhandler}>
                    <div>
                        <input onChange={UserHandler} type="text" name='name' placeholder='Name' />
                    </div>
                    <div>
                        <input onChange={UserHandler} type="text" name='email' placeholder='Email' />
                    </div>
                    <div>
                        <input onChange={UserHandler} type="text" name='password' placeholder='Password' />
                    </div>
                    <div>
                        <input onChange={UserHandler} type="date" name='date' />
                    </div>
                    <div>
                        <button className='submitButton'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Registration
