import { createContext, useContext, useState } from "react"
import { json } from "react-router-dom"

const OrderContext = createContext([])

export function useOrder() {
    return useContext(OrderContext)
}

export function OrderProvider({ children }) {



    const [cart, setCart] = useState([]) // stores id & quantity




    function getQuantity(id) {
        return cart.find((item) => item.id === id)?.quantity || 0
    }

    function increase(id) {
        setCart((current) => {

            if (current.find((item) => item.id === id) == null) {
                return [...current, { id, quantity: 1 }]
            } else {
                return current.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decrease(id) {
        setCart((current) => {
            // check if item quantity is 1
            if (current.find((item) => item.id === id)?.quantity === 1) {
                return current.filter(item => item.id !== id)
            } else {
                return current.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function remove(id) {
        setCart(current => {
            return current.filter(item => item.id !== id)
        })
    }

    function clear() {
        setCart([])
    }


    return (
        <OrderContext.Provider value={{ cart, increase, decrease, remove, clear }}>
            {children}
        </OrderContext.Provider>
    )
}
