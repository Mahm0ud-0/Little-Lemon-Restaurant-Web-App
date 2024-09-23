import { useState } from 'react'
import { useOrder } from '../OrderContext'
import { Link } from 'react-router-dom'
import lemonIcon from '../assets/lemon_icon.png'
import { food } from '../data'
import Button from '../components/Button'
import { OrderValidationSchema, validationSchema } from '../schema'
import { useFormik } from 'formik'


function Order() {

  const { cart, increase, decrease, remove, clear } = useOrder()

  const cartId = cart.map(cartItem => cartItem.id)
  let order = food.filter(foodItem => cartId.includes(foodItem.id))



  // add quantity to order objects
  order = order.map(item => {

    const newCart = cart.filter(cartItem => cartItem.id === item.id)
    return { ...item, quantity: newCart[0].quantity }

  })

  let price = 0

  order.forEach(item => {

    price += item.price * item.quantity

  })


  const [confirmed, setConfirmed] = useState(false)


  const formik = useFormik({
    initialValues: {
      email: '',
      creditCard: '',
      expDate: '',
      cvv: '',
    },

    validationSchema: OrderValidationSchema,

    onSubmit: async () => {

      // order logic here

      await new Promise((resolve) => setTimeout(resolve, 2000))
      setConfirmed(true)
      window.scrollTo(0, 0)
    },
  })







  return (
    <div className=''>
      <h2 className={`${confirmed ? 'opacity-0' : ''} flex items-center justify-center gap-3 text-3xl text-accent mb-12`}><img src={lemonIcon} alt="lemon" className='w-8' /> Order Online</h2>
      {!(cart.length)

        ?
        <>
          <Link to='/menu' className='underline  text-accent text-2xl text-center w-full flex justify-center'>
            check our menu
          </Link>
        </>
        :
        <>
          <div className={`flex flex-col lg:flex-row w-full justify-between items-center lg:items-start ${confirmed ? 'opacity-10' : ''}`}>
            {/* cards */}
            <div className='rounded-2xl w-full sm:w-3/4  lg:w-1/2 shadow-inner p-2 bg-gray-200 mx-auto max-h-[535px] overflow-auto flex gap-3 lg:block' id='orderCards'>{
              order.map(item => (

                // card
                <div key={item.id} className='w-[300px] shrink-0 lg:w-full h-[250px] bg-white shadow-md rounded-2xl lg:flex justify-between mb-4 relative'>

                  <button className='absolute right-2 -top-1 text-5xl text-primaryBlack hover:text-red-500' onClick={() => remove(item.id)}>
                    ×
                  </button>


                  <img src={item.img} alt={item.title} className='h-full w-[250px] bg-cover hidden lg:block' />


                  <div className='lg:w-1/2 flex flex-col items-center justify-center gap-8 h-full p-4'>

                    <div className='flex flex-col items-center justify-between'>
                      <h3 className="text-accent font-semibold text-xl mb-3">{item.title}</h3>

                      {/* ingredients */}
                      <p className="text-primaryBlack opacity-50 text-xs text-center mb-3">
                        {item.ingredients.join(' - ')}
                      </p>

                      {/* price */}
                      <p className="text-highlight font-bold text-lg">{item.price.toPrecision(4)} $</p>

                    </div>

                    <div className='flex justify-between items-center w-2/3'>
                      <button onClick={() => decrease(item.id)} className='bg-secondary hover:bg-accent text-accent hover:text-secondary text-2xl flex justify-center items-center w-7 h-7 p-5 rounded-2xl'>-</button>
                      <p className='text-primaryBlack font-bold text-2xl'>{item.quantity}</p>
                      <button onClick={() => increase(item.id)} className='bg-secondary hover:bg-accent text-accent hover:text-secondary text-2xl flex justify-center items-center w-7 h-7 p-5 rounded-2xl'>+</button>
                    </div>

                  </div>

                </div>
              ))


            }</div>

            {/* checkout */}

            <form onSubmit={formik.handleSubmit} className='mt-7 lg:mt-0 w-full sm:w-3/4 lg:w-[45%] flex flex-col gap-6'>
              <div className='flex justify-between'>
                <h3 className=' text-accent text-3xl font-semibold'>Total Price: </h3>
                <h3  aria-label='total price' className=' text-secondary text-3xl font-bold'>{price.toFixed(2)} $</h3>
              </div>

              <textarea required name="instructions" id="" rows="4" placeholder='location details & instructions...' className='rounded-2xl outline-none border-none p-2 text-accent shadow-md w-full placeholder:opacity-70 placeholder:text-accent'></textarea>


              {/* email */}
              <label className='flex flex-col text-primaryBlack font-semibold gap-1 sm:w-full'>email
                <input  aria-label='email' type="email" name='email'
                  placeholder='youremail@mail.com'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='bg-white p-2 px-3 rounded-2xl text-accent shadow-md'
                />
                {formik.errors.email && formik.touched.email && <h4 className="text-red-500 text-sm">{formik.errors.email}</h4>}
              </label>



              {/* credit card number */}
              <label className='flex flex-col text-primaryBlack font-semibold gap-1 w-full'>credit card number
                <input aria-label='credit card number' type="text" placeholder='xxxx-xxxx-xxxx-xxxx'
                  name='creditCard'
                  value={formik.values.creditCard}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='bg-white p-2 px-3 rounded-2xl text-accent shadow-md'
                />
                {formik.errors.creditCard && formik.touched.creditCard && <h4 className="text-red-500 text-sm">{formik.errors.creditCard}</h4>}

              </label>

              <div className='w-full flex flex-col md:flex-row justify-between'>

                {/* exp date */}
                <label className='flex flex-col text-primaryBlack font-semibold gap-1 md:w-2/5'>expiration date
                  <input  aria-label='expiratoin date' type="text" placeholder='mm/yy'
                    name='expDate'
                    value={formik.values.expDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='bg-white p-2 px-3 rounded-2xl text-accent shadow-md'
                  />
                  {formik.errors.expDate && formik.touched.expDate && <h4 className="text-red-500 text-sm">{formik.errors.expDate}</h4>}

                </label>

                {/* cvv */}
                <label className='flex flex-col text-primaryBlack font-semibold gap-1 md:w-2/5'>cvv
                  <input aria-label='cvv' type="text" placeholder='xxx'
                    name='cvv'
                    value={formik.values.cvv}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='bg-white p-2 px-3 rounded-2xl text-accent shadow-md'
                  />
                  {formik.errors.cvv && formik.touched.cvv && <h4 className="text-red-500 text-sm">{formik.errors.cvv}</h4>}

                </label>



              </div>


              <div className='w-full flex justify-center gap-4 lg:justify-between mt-6'>
                <Button text='confirm' className='shadow-sm' type='submit' disabled={formik.isSubmitting} onClick={formik.submitForm} />
                <Button text='cancel' className='hover:!bg-red-500 !bg-highlight' onClick={() => clear()} disabled={formik.isSubmitting} />
              </div>

            </form>
          </div>


          {confirmed &&
            <div className='sm:w-3/4 lg:w-1/2 gap-10 sm:h-[500px] absolute top-4 mx-auto px-5 sm:px-10 py-20 bg-primaryWhite rounded-2xl flex flex-col justify-between items-center shadow-md'>
              <div className='w-full flex justify-between items-center'>
                <h2 className='text-4xl text-accent'>your order is confirmed <br />check your email.</h2>
                <img src={lemonIcon} alt="Lemon" className='w-28' />
              </div>

              <Button text='OK' size='lg' onClick={() => { setConfirmed(false); clear() }} />
            </div>}
        </>

      }
    </div>
  )
}

export default Order