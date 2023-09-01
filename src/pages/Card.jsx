import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link, useNavigate } from 'react-router-dom';



const Card = ({ datas, loading }) => {
    const navigate = useNavigate();


    const handleStorage = (data) => {
        localStorage.setItem('selectedQuery', JSON.stringify(data));
        navigate('/about');
    }

    return (
        <>
            {!loading &&
                <div className='flex gap-3 overflow-x-scroll my-5' >
                    {datas.map((data) => (
                        <div key={data.id} onClick={() => handleStorage(data)} className='min-w-[50%] md:min-w-[20%] cursor-pointer '>
                            <img src={data?.image?.url} alt="cat" className=' w-[150px] h-[150px] object-cover rounded-2xl shadow-md' />
                            <h2 className='font-bold my-3'>{data.name}</h2>
                        </div>
                    )).filter((f, i) => i <= 10)
                    }


                </div>

            }


        </>
    )
}

export default Card