import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="Logo.png" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h3>E-mail</h3>
          <input type="text" value={email} />

          <h3>Password</h3>
          <input type="password" value={password} />

          <button type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you are agreeing to the term and services of eHAT. You
          Will abide by the community guidelines to ensure a good experience for
          everyone. Failing to do so will result in penalty
        </p>

        <button className="login_registerButton">
          Create your eHAT Account
        </button>
      </div>
    </div>
  )
}

export default Login
