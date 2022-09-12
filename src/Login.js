import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from './firebase'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate('/')
      })
      .catch((error) => alert(error.message))
  }

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          navigate('/')
        }
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="Logo.png" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h3>E-mail</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3>Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you are agreeing to the term and services of eHAT. You
          Will abide by the community guidelines to ensure a good experience for
          everyone. Failing to do so will result in penalty
        </p>

        <button className="login_registerButton" onClick={register}>
          Create your eHAT Account
        </button>
      </div>
    </div>
  )
}

export default Login
