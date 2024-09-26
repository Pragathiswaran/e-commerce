import React,{ useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [keyword, setkeyword] = useState('');
    const navigate = useNavigate()

    const searchKeyword = () =>{
        navigate(`/search?keyword=${keyword}`)
    }
  return (
    <>
      <input type='text' placeholder='Enter the product Name'
        className='w-98 p-2 pl-5 outline-0 rounded-l'
        onChange={(e)=>setkeyword(e.target.value)}/>

       <button className='bg-yellow-500 py-2 px-3 rounded-r '
       onClick={searchKeyword}>
         <FontAwesomeIcon icon={faMagnifyingGlass} />
       </button>
    </>
  )
}

export default SearchBar