import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify';
import { CartContext } from '../App'
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading';


export const Tecno = () => {
  const [showLogin, setShowLogin] = useState(true)
  // const [error, setError] = useState(null)
  const [loginName, setLoginName] = useState("")
  const [loginPass, setLoginPass] = useState("")
  const [SigninName, setSigninName] = useState("")
  const [SigninPass, setSigninPas] = useState("")
  const [signinEmail, setSigninEmail] = useState("")
  const [isloading, setIsLoading] = useState(false)
  const signIn = useContext(CartContext).signIn


  const navigate = useNavigate()

  const submitLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const loginForm ={"username": loginName, "password": loginPass}
    fetch("http://localhost:8008/api/token/", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginForm)})
    .then(res => {
      if (!res.ok){
        throw Error(res)
      }
        return res.json()
    })
    .then(result =>{
      setIsLoading(false)
      toast.success("Login Successful", {
        position:"top-right"})
        signIn(result)
        navigate("/admin", {replace: true})
    })
    .catch(() =>{
      setIsLoading(false)
      toast.error("Invalid Credentials", {
      position:"top-right"
    })
    });
  }
  const submitSignin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const signinForm = {"email": signinEmail, "username" : SigninName, "password": SigninPass}
    fetch("http://localhost:8001/user", {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(signinForm)})
    .then(res => {
      if (!res.ok){
        throw Error(res)
      }
        return res.json()
    })
    .then(() => {
        setIsLoading(false)
        toast.success("Account Created, login to continue", {
        position:"top-right"})
        setShowLogin(true)
    })
    .catch(() => {
      setIsLoading(false)
      toast.error("Username already exist", {
      position:"top-right"
    })

});
  }
  return (
    <>
    {isloading ? <Loading/> : 
    <>
    {showLogin ?
    <div className='text-center justify-content-center p-5'>
      <h2>Log in</h2>
      <form onSubmit={submitLogin}>
        <div className="form-outline mb-4">
          <input
          onChange={(e) => setLoginName(e.target.value)}
          value = {loginName}
          type="text" required className="form-control" placeholder='Username'/>
        </div>

        <div className="form-outline mb-4">
          <input
          onChange={(e) => setLoginPass(e.target.value)}
          value = {loginPass}
          type="password" required  className="form-control" placeholder='Password'/>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

        <div className="text-center">
          <p><button type="button" onClick={() => setShowLogin(false)} className='btn btn-warning'>Create Admin Account</button></p>
        </div>
      </form>
    </div> :
    <div className='text-center justify-content-center p-5'>
      <h2>Sign Up</h2>
        <form onSubmit={submitSignin}>
            <div className="form-outline mb-4">
              <input
              onChange={(e) => setSigninName(e.target.value)}
              value = {SigninName}
              type="text" required className="form-control" placeholder='Username'/>
            </div>
            <div className="form-outline mb-4">
              <input
              onChange={(e) => setSigninEmail(e.target.value)}
              value = {signinEmail}
              type="email" required className="form-control" placeholder='email'/>
            </div>

            <div className="form-outline mb-4">
              <input
              onChange={(e) => setSigninPas(e.target.value)}
              value = {SigninPass}
              type="password" required className="form-control"  placeholder='Password'/>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Create Account</button>

            <div className="text-center">
              <p><button type="button" onClick={() => setShowLogin(true)} className='btn btn-warning'>Go to log in page</button></p>
            </div>
          </form>
    </div>
    }</>
  }
    </>
  )
}
