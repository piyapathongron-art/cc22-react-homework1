import { useState, useEffect } from 'react'
import Products from './Products'
import Categorys from './Catetorys'

function App() {
  const [products, setProducts] = useState([])
  const [categorys, setCategorys] = useState([])

  useEffect(() => {
    const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data)
          setCategorys(data)
        });
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

  console.log(products)
  console.log(categorys)
  return (
    <>
      <div className='id1  h-[auto]'>
        {/* <h1>Product Fetch&Filter</h1>
        <hr /> */}

        <div>
          <h1 className='text-center m-5 text-2xl capitalize'>Current Category: {showCurrCat.length > 1 ? 'All' : showCurrCat} </h1>
          <h2 className='text-center m-5 text-2xl capitalize'>Amount: {products.length}</h2>
        </div>

        {/* catelog btn */}
        <div className='flex gap-10  justify-center animate-fade-up pt-5'>
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
