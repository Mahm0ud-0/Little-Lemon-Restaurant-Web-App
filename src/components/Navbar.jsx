import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import Button from './Button'

function Navbar({ toggle, setToggle, closeMenu }) {









    return (

        <header className='w-full h-20 bg-white shadow-md fixed top-0 z-10'>

            <nav className='w-full h-full bg-white flex justify-between max-w-[1080px] mx-auto p-4 items-center'>

                <Link to='/'>
                    <img src={logo} alt="Little Lemon" />
                </Link>

                <ul className='hidden md:flex justify-between gap-5 text-accent font-semibold'>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary transition' : '')} to='/'>Home</NavLink>
                    </li>
                    <li>
                        <Link to='/#About' className=''>About</Link>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary transition' : '')} to='/reservation'>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary transition' : '')} to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary transition' : '')} to='/order'>Order Online</NavLink>
                    </li>
                </ul>
                <Link to='login' className='hidden md:block'>
                    <Button text='Login' size='sm' />
                </Link>


                <button onClick={() => setToggle(prev => !prev)} className='md:hidden inline w-8 h-8 transition'>
                    {
                        !toggle ?
                            <svg className='fill-accent w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z" />
                            </svg>
                            :
                            <svg className='fill-accent w-8 h-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M9 2L19 2C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.480429 19.7071 0.292892C19.5196 0.105356 19.2652 0 19 0L9 0C8.73478 0 8.48043 0.105356 8.29289 0.292892C8.10536 0.480429 8 0.734784 8 1C8 1.26522 8.10536 1.51957 8.29289 1.70711C8.48043 1.89464 8.73478 2 9 2ZM19 10L1 10C0.734784 10 0.480429 10.1054 0.292892 10.2929C0.105356 10.4804 0 10.7348 0 11C0 11.2652 0.105356 11.5196 0.292892 11.7071C0.480429 11.8946 0.734784 12 1 12L19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10V10ZM1 7L19 7C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5L1 5C0.734784 5 0.480429 5.10536 0.292892 5.29289C0.105356 5.48043 0 5.73478 0 6C0 6.26522 0.105356 6.51957 0.292892 6.70711C0.480429 6.89464 0.734784 7 1 7Z" />
                            </svg>
                    }
                </button>

                {/* sm nav menu */}
                <ul className={`${toggle ? '-translate-y-[10000px]' : 'translate-y-0'} w-full h-screen absolute top-20 right-0 left-0 flex md:hidden flex-col bg-amber-50 text-2xl text-center gap-5 text-accent font-semibold z-[9]`}>

                    <li className=''>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary text-secondary transition w-full block p-4' : 'w-full block p-4')} onClick={closeMenu} to='/'>Home</NavLink>
                    </li>
                    <li className=''>
                        <Link to='/#About' className=' w-full block p-4'>About</Link>
                    </li>
                    <li className=''>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary text-secondary transition w-full block p-4' : 'w-full block p-4')} onClick={closeMenu} to='/reservation'>Reservation</NavLink>
                    </li>
                    <li className=''>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary text-secondary transition w-full block p-4' : 'w-full block p-4')} onClick={closeMenu} to='/menu'>Menu</NavLink>
                    </li>
                    <li className=''>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary text-secondary transition w-full block p-4' : 'w-full block p-4')} onClick={closeMenu} to='/order'>Order Online</NavLink>
                    </li>
                    <li className=''>
                        <NavLink className={({ isActive }) => (isActive ? 'border-b-4 border-secondary text-secondary transition w-full block p-4' : 'w-full block p-4')} onClick={closeMenu} to='/login'>Login</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar