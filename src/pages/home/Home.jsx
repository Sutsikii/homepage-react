import React from 'react'
import { Navbar } from '../../components/NavBar/Navbar'
import { ThreeJS } from '../../components/ThreeJS/ThreeJS'
import './home.scss'

export const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <ThreeJS/>
    </div>
  )
}
