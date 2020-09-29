import React, { useState } from 'react'
import './styles.scss'
import { FaSearch } from 'react-icons/fa'
const SearchInput = () => {
    const [searchValue, setSearch] = useState('')

    const onValueChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div className='search-container'>
            <FaSearch size='16' className='search-icon' />
            <input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="" role="combobox" placeholder="Search Facebook" autocomplete="off" spellcheck="false" value={searchValue} class="search-input"
                onChange={onValueChange}
            />
        </div>

    )
}

export default SearchInput
