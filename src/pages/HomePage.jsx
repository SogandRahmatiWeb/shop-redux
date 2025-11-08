import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HomePage() {
    const [products, setProducts] = useState([])
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('error')
            })
            .then(data => {
                // const categoryMens = data.filter(item => item.category === "men's clothing")
                // setProducts(categoryMens)

                setProducts(data)
                setIsError(false)
                setIsLoading(false)
            })
            .catch(error => {
                setProducts([])
                setIsError(true)
                setIsLoading(false)
            })
    }, [])

    return (
        <main>
            <h1 className="products mb-5">Products</h1>
            {/* <h2>https://680a04fa1f1a52874cdece8c.mockapi.io/products</h2> */}
            {isLoading && <h3 className="loader"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>
</h3> }
         {isError && <h3><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
</svg>
</h3>}
            <div className="flex justify-center gap-20 flex-wrap">
                {
                    products && products.map(item => {
                        return (
                            <div key={item.id} className="clothes p-10 w-[350px] ">
                                <img src={item.image} alt="" className="w-full object-cover object-top  h-[380px]" />
                                <h3>{item.title}</h3>
                                <p>$ {item.price}</p>
                                <Link className="border px-4 py-1 view" to={`/product/${item.id}`}>view</Link>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}