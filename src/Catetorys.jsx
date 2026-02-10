function Categorys (props) {
    const {hdlClick,hdlShowAll,btnCat} = props
    return(
        <>
         {btnCat.map(el => (
            <button key={el}
              className='bg-[#547792] grow h-20 w-50 p-2 drop-shadow-xl rounded-3xl text-white text-xl cursor-pointer duration-500 
              hover:translate-y-[-5px] hover:bg-blue-500 hover:grow-[10] hover:text-2xl hover:font-bold capitalize'
              onClick={hdlClick}>
              {el}
            </button>
          ))}
          <button
            onClick={hdlShowAll}
            className='bg-[#547792] grow h-20 w-50 p-2 drop-shadow-xl rounded-3xl text-white text-xl cursor-pointer duration-500 
              hover:translate-y-[-5px] hover:bg-blue-500 hover:grow-[10] hover:text-2xl hover:font-bold capitalize'>
            All
          </button>
        </>
    )

}

export default Categorys