import { React, useState } from 'react';
import logo from "../assets/image/CatwikiLogo.svg";
import { useFetch } from '../component/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';
import NavLogo from '../component/NavLogo';


const More = () => {

    const { data } = useFetch('https://api.thecatapi.com/v1/breeds?limit=30&api_key=live_mmWCo9gNVgBk1VFZhU0QOamkQ45GIhKfkN2or2e718Lfif31pGfhsPOnwkKafTEq')

    const navigate = useNavigate();
    // const [suggestions, setSuggestions] = useState([]);

    // console.log(setSuggestions(data));

    // const handleInputChange = (value) => {
    //     const res = data.filter(f => f.name.toLowerCase().includes(value));
    //     setQuery(res);
    //     if (value === '') {
    //         setQuery([]);
    //     }
    // }

    // console.log(query);

    const handleStorage = (data) => {
        localStorage.setItem('selectedQuery', JSON.stringify(data));
        navigate('/about');
    }

    return (
        <div className='px-5 pt-5 lg:pt-5 lg:px-80'>
            <NavLogo />
            <section className='mt-32'>
                <h1 className='text-[30px] font-bold text-start my-3'>Top 10 most searched Breeds</h1>
                {
                    data && data.map((datas) => (
                        <div onClick={() => handleStorage(datas)} className='md:flex gap-8 justify-center my-10 cursor-pointer' key={datas.id}>
                            <img src={datas.image.url} alt="" className='w-[150px] rounded-2xl' />
                            <div className='my-5 '>
                                <div className='flex font-bold gap-5 my-3'>
                                    <span>.</span>
                                    <h2>{datas.name}</h2>
                                </div>
                                <p>{datas.description}</p>
                            </div>

                        </div>
                    ))

                }
            </section >
            <Footer />
        </div >
    )
}

export default More