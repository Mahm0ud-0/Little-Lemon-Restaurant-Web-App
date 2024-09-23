import { Link } from 'react-router-dom'
import lemon_icon from '../assets/lemon_icon.png'
import heroImg from '../assets/plate2.jpg'
import Button from './Button'


function Hero() {
  return (
    <section className='flex flex-col-reverse sm:flex-row justify-between items-stretch overflow-hidden'>

      {/* text & CTA */}
      <div className='md:max-w-[500px] mt-14'>
        
        <div className='flex items-center gap-4'>
          <h1 className="text-4xl md:text-5xl text-primaryBlack">Little Lemon</h1>
          <img src={lemon_icon} alt="lemon icon" className='w-8 h-12 aspect-auto translate-y-1' />
        </div>

        <h2 className='text-2xl md:text-3xl text-accent'>Chicago</h2>

        <p className='text-lg text-primaryBlack opacity-90 max-w-[325px] mt-5 mb-12'>
          we are a Family owned Mediterranean
          restaurant, focused on Traditional
          recipes served with a modern twist.
        </p>

        <Link to='reservation' className='flex items-center'>
          <Button text='reserve a table' size='' />

          {/* dish icon */}
          <svg className='h-[40px] w-[50px] ml-4 hover:fill-secondary fill-accent' viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.148 17.1429H0.376007V20H28.376V17.1429H24.148ZM26.976 15.7143C26.598 9.9 22.426 5.14286 16.952 3.98571C17.092 3.64286 17.176 3.25714 17.176 2.85714C17.176 1.28571 15.916 0 14.376 0C12.836 0 11.576 1.28571 11.576 2.85714C11.576 3.25714 11.66 3.64286 11.8 3.98571C6.32601 5.14286 2.15401 9.9 1.77601 15.7143H26.976ZM14.376 6.54286C18.506 6.54286 22.034 9.15714 23.476 12.8429H5.27601C6.71801 9.15714 10.246 6.54286 14.376 6.54286Z"  />
          </svg>
        </Link>
        
      </div>

      {/* img */}
      <div className=''>
        <img src={heroImg} alt="plate image" className=' aspect-auto w-full md:w-[500px] translate-x-3 md:translate-x-16'/>
      </div>

    </section>
  )
}

export default Hero