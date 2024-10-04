import React, { useEffect } from 'react'
import Home from './pages/home/Home'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'
import Login from './pages/login/Login'


const App = () => {

//  const navigate = useNavigate()

// useEffect(() => {
//        onAuthStateChanged(auth, async (user) => {
//         if(user){
//           console.log('Logged In');
//           navigate('/')
          
//         } else{
//           console.log('Logged Out');
//           navigate('/login')
          
//         }
//        })
// }, [])

  return (
    <div>
      <Login />
      
    </div>
  )
}

export default App
