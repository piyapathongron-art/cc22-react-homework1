function Products(props) {
    const { img, description, price, title } = props
    return (
        <div className="flex flex-col gap-4 w-[300px] m-8 animate-fade-up duration-500 hover:translate-y-[-10px] ">
            <div className="card shadow-2xl max-w-[300px] h-[450px] text-center mx-auto p-3 items-center flex flex-col rounded-2xl animate-fade-up bg-white duration-1000 hover:bg-blue-100">
                <div className=" h-[150px]">
                    <img src={img} className=' rounded-2xl  h-[150px]' />
                </div>
                <h1 className='text-[18px] mt-5 font-bold '>{title}</h1>
                <p className="text-gray-500 text-[16px] font-bold mt-2">{price}$</p>
                <div className="description h-[200px] overflow-auto my-5">
                    <p className="h-[150px] overflow-auto text-[14px]">{description}</p>
                </div>
                <div className="flex items-end w-[100%] h-auto">
                    <button
                        className='p-2 bg-[#94B4C1] w-full text-center text-white cursor-pointer text-[18px] rounded-2xl self-end duration-500 hover:bg-blue-500 hover:font-bold'
                        onClick={() => alert(`add ${title} to cart`)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products