function Categorys (props) {
    const {hdlClick,hdlShowAll,btnCat} = props
    return(
        <>
         {btnCat.map(el => (
            <button key={el}
              className='bg-gray-800  h-20 w-50 p-2 drop-shadow-xl rounded-3xl text-white cursor-pointer duration-500 hover:translate-y-[-5px] hover:bg-blue-500'
              onClick={hdlClick}>
              {el}
            </button>
          ))}
          <button
            onClick={hdlShowAll}
            className='bg-gray-800  h-20 w-50 p-2 drop-shadow-xl rounded-3xl text-white cursor-pointer duration-500 hover:translate-y-[-5px] hover:bg-blue-500'>
            All
          </button>
        </>
    )

}

export default Categorys