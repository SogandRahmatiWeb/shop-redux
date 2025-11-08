import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "../features/cart/cartSlice"

export default function ProductDetailsPage() {
    const [product, setProduct] = useState({})
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()  // 3

    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('error')
            })
            .then(data => {
                setProduct(data)
                setIsError(false)
                setIsLoading(false)
            })
            .catch(error => {
                setProduct({})
                setIsError(true)
                setIsLoading(false)
            })
    }, [])

    return (
        <main>
            <h1 className="ProductDetails mt-4 ">Product Details page</h1>
            {isLoading && <h3 className="loader"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</h3> }
            {isError && <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
</h3>}
             <div className="flex justify-center">
         <img src={product.image} className=" w-64 object-cover " alt="" />

             </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button className="addtocart" onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
        </main>
    )
}