import React, { useEffect, useState } from 'react'
import './login.css'
import { auth, login, signup } from '../../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';



const Login = () => {

  const navigate = useNavigate()

  useEffect(() => {
         onAuthStateChanged(auth, async (user) => {
          if(user){
            console.log('Logged In');
            navigate('/')
            
          } else{
            console.log('Logged Out');
            navigate('/login')
            
          }
         })
  }, [])
  

  const [sign, setSign] = useState('Sign In')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  const user_auth = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(sign === 'Sign In'){
      await login(email, password)
    } else{
      await signup(name, email, password)
    }
    setLoading(false)
  }






  return (
      loading ? <div className='login-spinner'> 
   <img src="/netflix_spinner.gif" alt="" />
      </div> :
    <div className='login'>
       <img src="/logo.png" className='login-logo' alt="" />  
       <div className="login-form">
        <h1>{sign}</h1>
        <form>
          {sign  === 'Sign Up' ? <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name'/> : <></>}
           
           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='email' />
           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password'/>
           <button onClick={user_auth} type='submit'>{sign}</button>
           <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
           </div>
        </form>

        <div className="form-switch">

          {sign === 'Sign In' ?  <p>New to Netflix? <span onClick={() => setSign('Sign Up')}>Sign Up Now</span></p> : <p>Already have account? <span onClick={() => setSign('Sign In')}>Sign In Now</span></p>}
         


        </div>
       </div>
       
      <ToastContainer theme='dark'/>
    </div>
  )
}

export default Login
