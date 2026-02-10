import { useState, useEffect } from 'react'
import Products from './Products'
import Categorys from './Catetorys'

function App() {
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          setCategorys(data)
        })
        .finally(() => setLoading(false))
    }
    getProducts()
  }, [])

  const btnList = categorys.map(el => el.category)
  const btnCat = [...new Set(btnList)]
  console.log(btnCat)
  const currCat = products.map(el => el.category)
  const showCurrCat = [...new Set(currCat)]

  console.log(showCurrCat.length)

  const hdlClick = (e) => {
    const result = categorys.filter(el => el.category === e.target.textContent)
    setProducts(result)
  }

  const hdlShowAll = () => {
    setProducts(categorys)
  }

  // console.log(products)
  // console.log(categorys)

  // loading page
  if (loading) {
    return (
      <div class="fixed inset-0 bg-gray-100 flex items-center justify-center">
        <div class="relative flex items-center justify-center">
          <div class="w-16 h-16 border-10 border-blue-200 rounded-full"></div>

          <div class="absolute w-16 h-16 border-10 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p class="ml-4 text-gray-700 text-2xl font-medium">Loading...</p>
      </div>
    )
  }
  return (
    <>
      <div className='id1 h-auto'>
        {/* <h1>Product Fetch&Filter</h1>
        <hr /> */}

        <div className='bg-[#213448] text-white  flex w-full justify-between '>
          <div className="rheader flex mx-5">
          <img src="https://www.svgrepo.com/show/235061/shop-commerce.svg" alt="" className='w-13 ' />
          </div>
    
          <div className="rheader flex">
            <h1 className='m-5 text-xl capitalize'>Current Category: <span className='font-bold'>{showCurrCat.length > 1 ? 'All' : showCurrCat}</span> </h1>
            <h2 className='m-5 text-xl capitalize'>Amount: {products.length}</h2>
          </div>
        </div>

        {/* catelog btn */}
        <div className='flex gap-10  mx-10 justify-center animate-fade-up pt-5'>
          <Categorys
            btnCat={btnCat}
            hdlClick={hdlClick}
            hdlShowAll={hdlShowAll} />
        </div>

        {/* product list */}
        <div className='flex flex-wrap justify-center animate-fade-up '>
          {products.map(el => (
            <Products key={el.id}
              img={el.image}
              title={el.title}
              description={el.description}
              price={el.price} />
          ))}

        </div>
      </div>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </>
  )
}

export default App
