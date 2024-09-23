import lemon_icon from '../assets/lemon_icon.png'
import lemon from '../assets/lemon.jpg'
import chef1 from '../assets/head_chef.jpg'
import chef2 from '../assets/Mario_Adrian_2.jpg'

function About() {
    return (
        <section id='About' className='flex justify-between items-center flex-wrap md:flex-nowrap'>
            {/* text */}
            <div className='w-full md:max-w-[500px] md:pr-16'>

                <div className='flex items-center gap-4'>
                    <h1 className="text-4xl md:text-6xl text-primaryBlack">Little Lemon</h1>
                    <img src={lemon_icon} alt="lemon icon" className='w-8 h-12 aspect-auto translate-y-1' />
                </div>

                <h2 className='text-2xl md:text-3xl text-accent'>Chicago</h2>

                <p className='text-lg text-primaryBlack opacity-90 w-full mt-12 mb-12 leading-8'>
                    Traditional recipes served with a modern twist.
                    Family owned Mediterranean restaurant.Traditional recipes
                    served with a modern twist.Family owned Mediterranean restaurant.
                    Traditional recipes served with a modern twist.
                    Family owned Mediterranean restaurant.Traditional recipes
                    served with a modern twist.Family owned Mediterranean restaurant.
                    Traditional recipes served with a modern twist.
                </p>
            </div>
            {/* images */}
            <div className='flex gap-3 flex-wrap md:flex-nowrap w-full h-full'>
                <img src={chef2} alt="Mario & Adrian" className='w-full lg:w-80 rounded-xl shadow-md'/>
                <div className='lg:flex-col gap-3 w-full justify-between hidden lg:flex'>
                    <img src={chef1} alt="little lemon" className='w-56 h-56 rounded-xl shadow-md' />
                    <img src={lemon} alt="little lemon" className='w-56 h-56 rounded-xl shadow-md' />
                </div>
            </div>
        </section>
    )
}

export default About