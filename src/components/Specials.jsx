import { Link } from "react-router-dom"
import { food } from "../data"
import Button from "./Button"


function Specials() {
    return (
        <section className="w-full">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
                <h2 className="font-semibold text-4xl w-[200px] text-center text-accent opacity-0 hidden md:block"></h2>
                <h2 className="font-semibold text-4xl text-center text-accent">Specials</h2>
                <Link to='/menu'>
                    <Button text='menu' />
                </Link>
            </div>

            {/* cards */}
            <div className="flex justify-center gap-4 lg:justify-between flex-wrap lg:flex-nowrap">
                {
                    food.map((food) => {
                        return <div className="rounded-2xl overflow-hidden text-center flex flex-col gap-4 shadow-md pb-4 hover:scale-[1.02] transition" key={food.id}>
                            {
                                <>
                                    <div className="w-[345px] h-[220px] overflow-hidden relative">
                                        <img src={food.img} className="w-full absolute bottom-0" />
                                    </div>
                                    <h3 className="text-accent font-semibold text-xl">{food.title}</h3>
                                    <p className="text-primaryBlack opacity-50 text-sm">
                                        {food.ingredients.join(' - ')}
                                    </p>
                                    <div className="w-full flex justify-between px-3 mt-4">
                                        <p className="text-secondary font-bold text-lg">{food.price.toPrecision(4)} $</p>
                                        <Link to='/menu'><span className="hover:text-highlight text-accent">see more</span></Link>
                                    </div>
                                </>
                            }
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default Specials