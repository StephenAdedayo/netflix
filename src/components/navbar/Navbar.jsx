import React, { useEffect, useRef } from 'react'
import './navbar.css'
import { logout } from '../../firebase'

const Navbar = () => {


  const navRef = useRef()

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      } else{
        navRef.current.classList.remove('nav-dark')
      }
    })

  }, [])   


  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src="/logo.png" alt="" />
        <ul>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movies</li>
            <li>New and Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>


      <div className="navbar-right">
        <img src="/search_icon.svg" alt="" className='icons' />
        <p>Children</p>
        <img src="/bell_icon.svg" alt="" className='icons'/>
        <div className="navbar-profile">
            <img src="/profile_img.png" alt="" className='profile'/>
            <img src="/caret_icon.svg" alt="" className='' />
            <div className="dropdown">
                <p onClick={() => logout()}>Sign out</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
