import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const [loginData, setLoginData] = useState({
      
    })

    const onChangeInput =(e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const postRequest = async() => {
        try {
            
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/login` || 'http://localhost:4040',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginData)
            }); console.log('la porta é', import.meta.env.VITE_SERVER_BASE_URL) 
            
            const data = await response.json()
            if(response.ok) {
                localStorage.setItem('auth', JSON.stringify(data.token))
                navigate('/homepage', {replace: true})
            }
            return response
        } catch (e) {
            console.log(e.message)
        }
    }

    const onSubmit = async(e) => {
        e.preventDefault()
        await postRequest()
    }

    return(
        <div className='container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center'>
            <div className='row justify-content-center '>
                <div className='h-100'>
                    <div className='d-flex flex-column align-items-center justify-content-center p-4 border rounder shadow-sm '>
                        <form 
                            className='d-flex flex-column gap-4' 
                            onSubmit={onSubmit}
                        
                        >
                            <h2>Login</h2>
                            <input
                                className='form-control'
                                type='email'
                                name='email'
                                placeholder='email'
                                onChange={onChangeInput}
                            />
                            <input
                                className='form-control'
                                placeholder='password'
                                name='password'
                                type='password'
                                onChange={onChangeInput}
                            />
                            <button className='btn btn-primary' >
                                login
                            </button>
                              

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Login


