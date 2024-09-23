import { Route, Routes, useLocation } from 'react-router-dom'
import Reservation from './pages/Reservation'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Order from './pages/Order'
import { useEffect, useState } from 'react'
import { OrderProvider } from './OrderContext'

function App() {

  const location = useLocation()

  const [toggle, setToggle] = useState(true)


  function closeMenu() {
    setToggle(true)
  }
  

  useEffect(() => {
    if(location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if(element) {
        element.scrollIntoView({behavior: 'smooth'});
        closeMenu()
      }
        
    }
  },[location])
  
  useEffect(() => {

    document.body.scrollTo(0,0)

    
  },[location.pathname])
  




  return (


    <OrderProvider>
      <div className={`bg-primaryWhite max-w-screen min-h-screen relative pb-[400px] mx-auto w-full md:max-h-fit ${location.pathname === '/reservation' ? 'image-bg' : ''} ${!toggle ? 'overflow-y-hidden ' : ''}`}>

        <Navbar toggle={toggle} setToggle={setToggle} closeMenu={closeMenu}/>
        <main className={`md:max-w-[1080px] mx-auto px-4 pt-28 md:opacity-100 ${!toggle ? 'opacity-5' : ''}`}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservation' element={<Reservation />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/order' element={<Order />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        </main>

        <Footer className={`${!toggle ? 'hidden ' : ''}`} />



      </div>
    </OrderProvider>
  )
}

export default App
