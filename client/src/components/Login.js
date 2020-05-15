import React, { useState } from "react";
import { AxiosWithAuth } from '../util/AxiosWithAuth'
import { useHistory } from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login, setLogin] = useState({
    username:'',
    password:''
  })
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleChange = (e) => {
    e.preventDefault()
    setLogin({
      ...login, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    AxiosWithAuth()
      .post('/api/login', login)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        setLogin({
          username:'',
          password:'',
        })
        history.push('/bubble-page')
        setIsLoading(false)
    })
      .catch(err => console.log(err))

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
          type='text'
          name='username'
          placeholder='username'
          value={login.username}
          onChange={handleChange}
      />
      <input 
          type='password'
          name='password'
          placeholder='password'
          value={login.password}
          onChange={handleChange}
      />
      <button type='submit'>Log in</button>
      {isLoading &&  (
        <div>Loading (replace this with a gif)</div>
      )}
  </form>
</div>
)
}
export default Login;
