import { React,useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { WebsiteProvider } from './Components/Context/WebsiteContext'

function App() {
  const [background, setBackground]=useState('light')
 const ligthBackground=()=>{
    setBackground('light')
 }
 
 const darkBackground=()=>{
   setBackground('dark')
 }
 useEffect(()=>{
  document.querySelector('html').classList.remove('light','dark');
  document.querySelector('html').classList.add(background)
})
  return (
    <WebsiteProvider value={{ligthBackground, darkBackground}}>
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    </WebsiteProvider>
  )
}

export default App
