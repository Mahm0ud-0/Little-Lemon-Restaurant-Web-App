import { useContext } from 'react'
import lemonIcon from '../assets/lemon_icon.png'
import Button from '../components/Button'
import { food } from '../data'
import { useOrder } from '../OrderContext'

function Menu() {


  const { increase } = useOrder()



  return (
    <div>
      <h2 className='flex items-center justify-center gap-3 text-3xl text-accent mb-12'><img src={lemonIcon} alt="lemon" className='w-8' /> Our Menu</h2>
      <section className='flex justify-center gap-4 lg:justify-between flex-wrap lg:flex-nowrap'>

        {food.map((food) => (
          // card
          <div className="rounded-2xl overflow-hidden text-center flex flex-col items-center gap-4 shadow-md pb-4 mb-3 hover:scale-[1.02] transition" key={food.id}>
            {/* image */}
            <div className="w-[345px] h-[220px] overflow-hidden relative">
              <img src={food.img} className="w-full absolute bottom-0" />
            </div>

            {/* title */}
            <h3 className="text-accent font-semibold text-xl">{food.title}</h3>

            {/* ingredients */}
            <p className="text-primaryBlack opacity-50 text-sm">
              {food.ingredients.join(' - ')}
            </p>

            {/* price */}
            <p className="text-highlight font-bold text-lg">{food.price.toPrecision(4)} $</p>


            <Button size='lg' text='order' onClick={() => increase(food.id)} />

          </div>

        ))}
      </section>
    </div>
  )
}

export default Menu