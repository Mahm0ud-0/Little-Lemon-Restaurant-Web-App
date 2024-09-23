import { useState } from 'react'
import lemonIcon from '../assets/lemon_icon.png'
import Button from '../components/Button'
import { useFormik } from 'formik'
import { LoginValidationSchema } from '../schema'

function Login() {


  const [signup, setsignup] = useState(false)


  return (
    <form className={`w-full md:w-2/3 mx-auto bg-white  shadow-lg rounded-3xl p-4 lg:px-10 pb-10 flex flex-col justify-between items-center`}>
      <h2 className='flex items-center justify-center gap-3 text-3xl text-accent mb-3'>
        <img src={lemonIcon} alt="lemon" className='w-8' /> {signup ? 'Sign up' : 'Log in'}
      </h2>
      <p className='text-center text-sm text-primaryBlack opacity-70 font-semibold mb-10'>please enter you details to {signup ? 'Sign up' : 'Log in'}</p>

      {/* emial */}
      <input type="text" name="email" placeholder='Email' className='w-full lg:w-2/3 p-3 mb-12 border-b-[3px] border-b-accent placeholder:font-semibold placeholder:text-accent placeholder: placeholder:text-lg text-accent bg-transparent' />

      {/* password */}
      <input type="password" name="password" placeholder='Password' className='w-full lg:w-2/3 p-3 mb-12 border-b-[3px] border-b-accent placeholder:font-semibold placeholder:text-accent placeholder: placeholder:text-lg text-accent bg-transparent' />

      {/* confirm password */}
      {signup &&
        <input type="password" name="password" placeholder='Confirm Password' className='w-full lg:w-2/3 p-3 mb-12 border-b-[3px] border-b-accent placeholder:font-semibold placeholder:text-accent placeholder: placeholder:text-lg text-accent bg-transparent' />
      }
      {/* signup */}
      {!signup &&
        <div className='flex justify-between items-center w-full lg:w-2/3 mb-7'>
          <p className='text-primaryBlack opacity-70 '>Don't have an account?</p>
          <p className='underline cursor-pointer font-semibold hover:text-accent hover:opacity-100 text-primaryBlack opacity-70' onClick={() => setsignup((prev) => !prev)}>Sign up</p>
        </div>}

      {/* login */}
      {signup &&
        <div className='flex justify-between items-center w-full lg:w-2/3 mb-7'>
          <p className='text-primaryBlack opacity-70 '>Already have an account?</p>
          <p className='underline cursor-pointer font-semibold hover:text-accent hover:opacity-100 text-primaryBlack opacity-70' onClick={() => setsignup((prev) => !prev)}>Log in</p>
        </div>}


      <Button size='lg' text={signup ? 'Sign up' : 'Log in'} className='' />
    </form>
  )
}

export default Login