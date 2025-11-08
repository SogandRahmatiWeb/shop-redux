import { useDispatch, useSelector } from "react-redux"
import { decreaseQty, increseQty, removeFromCart } from "../features/cart/cartSlice"

export default function CartPage() {
    const cartProducts = useSelector(state => state.cart.items)

    const dispatch = useDispatch() // actions

    const total = cartProducts.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)

    return (
        <main>
            <h1 className="cartpage  ">Cart page</h1>
            <div>
                {
                    cartProducts && cartProducts.map(item => {
                        return (
                            <div key={item.id} className="p-4">
                                 <div className="flex justify-center">
                                <img src={item.image} alt="" className="w-45 cart " />
                                </div>
                                <h3 className="p-4">{item.title}</h3>
                                <button   onClick={() => dispatch(decreaseQty(item))} className="border mx-2 bdec">-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => dispatch(increseQty(item))} className="border mx-2 binc">+</button>
                                <br />
                                <p className="price">$ {item.price}</p>
                                  <button onClick={() => dispatch(removeFromCart(item))} className="bremove"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                               </svg>
                             </button>
                            </div>
                        )
                    })
                }
            </div>
            <h2 className="total">Total: {total} $</h2>
        </main>
    )
}