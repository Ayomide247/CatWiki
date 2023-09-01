import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const SearchBar = () => {
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds?limit=150&api_key=live_mmWCo9gNVgBk1VFZhU0QOamkQ45GIhKfkN2or2e718Lfif31pGfhsPOnwkKafTEq')
            .then(res => res.json())
            .then(data => {
                setSuggestions(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const [query, setQuery] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (value) => {
        const res = suggestions.filter(f => f.name.toLowerCase().includes(value));
        setQuery(res);
        if (value === '') {
            setQuery([]);
        }
    }

    const handleStorage = (data) => {
        localStorage.setItem('selectedQuery', JSON.stringify(data));
        navigate('/about');
    }

    return (
        <div className=''>
            <form className='flex justify-between my-2 w-[100%] md:w-[70%] text-black bg-white py-2 px-3 md:py-4 md:px-8 rounded-full'>
                <input type="text" placeholder='Search' className=' w-[70%] outline-none bg-inherit' onChange={e => handleInputChange(e.target.value)} />
                <FaSearch className='my-auto' />
            </form>
            {query.length > 0 && (
                <div className='w-[100%] md:w-[70%] leading-7 h-[200px] overflow-y-scroll bg-white rounded-xl text-[#291507] font-bold p-3 md:p-10 '>
                    {query.map((q, i) => (
                        <div key={q.id}>
                            <div onClick={() => handleStorage(q)} className='cursor-pointer'>
                                {q.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar;
