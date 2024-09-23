import { useState } from 'react'
import lemonIcon from '../assets/lemon_icon.png'
import Button from '../components/Button'
import { useFormik } from 'formik'
import { validationSchema } from '../schema'


function Reservation() {


  const [confirmed, setConfirmed] = useState(false)


  const formik = useFormik({
    initialValues: {
      date: '',
      guests: '',
      name: '',
      email: '',
      instructions: '',
      occasion: '',
      seat: 'in',
      creditCard: '',
      expDate: '',
      cvv: '',
    },

    validationSchema: validationSchema,

    onSubmit: async () => {
      
      // reservation logic here

      await new Promise((resolve) => setTimeout(resolve, 2000))
      setConfirmed(true)
      window.scrollTo(0,0)
    },
  })




  return (
    <>
      {!confirmed &&
      <form onSubmit={formik.handleSubmit} className={`md:w-11/12 lg:w-3/4 mx-auto bg-[#FAFAFAD9] rounded-3xl p-4 px-10 pb-10 flex flex-col items-stretch sm:items-start justify-between gap-7`}>
        <h2 className='sm:w-full flex items-center justify-center gap-3 text-2xl text-center sm:text-3xl text-accent mb-3'><img src={lemonIcon} alt="lemon" className='w-8' /> reserve your table</h2>

        {/* row */}
        <div className='flex justify-between gap-3 flex-col sm:flex-row w-full'>

          {/* date & time */}
          <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-[300px]'><p className='w-full flex justify-between items-center'>date & time {formik.errors.date && formik.touched.date && <h4 className="text-red-500 text-sm">{formik.errors.date}</h4>}</p>

            <input type="datetime-local" name='date'
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}

              className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm' />

          </label>

          {/* number of guests */}
          <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-[300px]'><p className='w-full flex justify-between items-center'>number of guests {formik.errors.guests && formik.touched.guests && <h4 className="text-red-500 text-sm">{formik.errors.guests}</h4>}</p>

            <input type="number" name='guests'
              min={1}
              placeholder='number of guests'
              value={formik.values.guests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm' />

          </label>
        </div>


        {/* row */}
        <div className='flex justify-between gap-3 flex-col sm:flex-row w-full'>

          {/* name */}
          <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-[300px]'><p className='w-full flex justify-between items-center'>name {formik.errors.name && formik.touched.name && <h4 className="text-red-500 text-sm">{formik.errors.name}</h4>}</p>
            <input type="text" name='name'
              placeholder='your name'
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm' />
          </label>

          {/* email */}
          <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-[300px]'><p className='w-full flex justify-between items-center'>email {formik.errors.email && formik.touched.email && <h4 className="text-red-500 text-sm">{formik.errors.email}</h4>}</p>
            <input type="email" name='email'
              placeholder='youremail@mail.com'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm'
            />

          </label>
        </div>

        {/* row */}
        <div className='flex justify-between mt-7 flex-col gap-5 sm:flex-row w-full'>

          {/* instructions */}
          <textarea name="instructions" id="" rows="6"
            placeholder='instructions...'
            value={formik.values.instructions}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className='rounded-2xl outline-none border-none p-2 text-accent shadow-sm sm:w-[300px]'></textarea>

          {/* ocasion & seating */}
          <div className='sm:w-[300px] flex flex-col justify-between gap-3'>


            <select name="occasion" onChange={formik.handleChange} value={formik.values.occasion} className='border-none outline-none w-full bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm font-semibold'>
              <option value="" onChange={formik.handleChange} disabled>occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="other">Other..</option>
            </select>

            {/* seating radio */}
            <div className='flex flex-col justify-between gap-3'>
              <label className='flex items-center gap-6 text-lg cursor-pointer text-primaryBlack font-semibold'>
                <input type="radio" name="seat" value='in'
                  onChange={formik.handleChange}
                  checked={formik.values.seat === 'in'}
                  className='w-7 h-7 accent-accent hover:accent-accent shadow-sm cursor-pointer' />
                indoor
              </label>

              <label className='flex items-center gap-6 text-lg cursor-pointer text-primaryBlack font-semibold'>
                <input type="radio" name="seat" value='out'
                  onChange={formik.handleChange}
                  checked={formik.values.seat === 'out'}
                  className='w-7 h-7 accent-accent hover:accent-accent shadow-sm cursor-pointer' />
                outdoor
              </label>
            </div>

          </div>


        </div>

        {/* row */}
        <div className='flex justify-between mt-7 flex-col gap-3 sm:flex-row w-full'>

          {/* credit card */}
          <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 w-full sm:w-[300px]'>credit card number
            <input type="text" name='creditCard' placeholder='xxxx-xxxx-xxxx-xxxx'
              value={formik.values.creditCard}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm' />
            {formik.errors.creditCard && formik.touched.creditCard && <h4 className="text-red-500 text-sm">{formik.errors.creditCard}</h4>}
          </label>

          {/* expiration date and cvv */}

          <div className='sm:w-[300px] flex flex-col gap-3 sm:flex-row justify-between'>

            <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-32'>expiration date
              <input type="text" name='expDate' placeholder='mm/yy'
                value={formik.values.expDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm'
              />
              {formik.errors.expDate && formik.touched.expDate && <h4 className="text-red-500 text-xs">{formik.errors.expDate}</h4>}
            </label>

            <label htmlFor="" className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-32'>cvv
              <input type="text" name='cvv' placeholder='xxx'
                value={formik.values.cvv}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='bg-primaryWhite p-2 px-3 rounded-2xl text-accent shadow-sm'
              />
              {formik.errors.cvv && formik.touched.cvv && <h4 className="text-red-500 text-xs">{formik.errors.cvv}</h4>}
            </label>
          </div>

        </div>

        <div className='flex justify-center w-full mt-10'>
          <Button size='lg' text='confirm' className='shadow-sm' type='submit' disabled={formik.isSubmitting} />
        </div>
      </form>}

      {confirmed &&
      <div className='sm:w-3/4 lg:w-1/2 gap-10 sm:h-[500px] mx-auto px-5 sm:px-10 py-20 bg-primaryWhite rounded-2xl flex flex-col justify-between items-center shadow-md'>
        <div className='w-full flex justify-between items-center'>
          <h2 className='text-2xl sm:text-4xl text-accent'>your reservation is confirmed <br />check your email.</h2>
          <img src={lemonIcon} alt="Lemon" className='w-20 sm:w-28' />
        </div>

        <Button text='OK' size='' onClick={() => setConfirmed(false)} />
      </div>}
    </>

  )
}

export default Reservation