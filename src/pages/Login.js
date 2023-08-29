import React from 'react'

function Login() {
  return (
    <div>
      <form>
        <input type='email' name='email' placeholder='Enter Your Email'></input>
        <input type='password' name='password' placeholder='Enter Your Password'></input>
      </form>
    </div>
  )
}

export default Login