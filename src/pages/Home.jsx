import React from 'react'
import { FaCat, FaRegCopyright } from 'react-icons/fa';
import Cat from "../assets/image/HeroImagelg.png";
import logo from "../assets/image/CatwikiLogo.svg";
import logo2 from "../assets/image/CatwikiLogoWhite.svg";
import image1 from "../assets/image/image1.png";
import image2 from "../assets/image/image2.png";
import image3 from "../assets/image/image3.png";
import Card from './Card';
import axios from 'axios';
import { useFetch } from '../component/useFetch';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import SearchBar from '../component/SearchBar';
import NavLogo from '../component/NavLogo';
import Skeleton from 'react-loading-skeleton';

const Home = () => {

    const { data, loading } = useFetch('https://api.thecatapi.com/v1/breeds?limit=&api_key=live_mmWCo9gNVgBk1VFZhU0QOamkQ45GIhKfkN2or2e718Lfif31pGfhsPOnwkKafTEq')

    // https://api.thecatapi.com/v1/breeds?/search?limit=4&breed_ids=beng&api_key=live_mmWCo9gNVgBk1VFZhU0QOamkQ45GIhKfkN2or2e718Lfif31pGfhsPOnwkKafTEq
    return (
        <div className='px-5 pt-32 lg:px-64 lg:pb-0 relative w-screen h-screen'>
            <NavLogo />
            <section className='my-5  '>
                <div className=''>
                    <div className='relative '>
                        <div className='absolute text-sky-50 p-2 lg:p-16 w-[60%] font-medium z-0'>
                            <img src={logo} alt="" className=' w-[100px] md:w-[200px] invert' />
                            <p className='text-[14px] lg:text-[20px] my-2'>Get to know more about your cat breed</p>
                            <SearchBar />
                        </div>
                        <img src={Cat} alt="" className='rounded-t-2xl' />
                    </div>
                    <div className='text-[#291507] py-7 bg-[#E3E1DC] p-3 rounded-b-2xl lg:px-16'>
                        <p className='font-medium'>Most Searched Breeds</p>
                        <div className='border-b-4 border-[#291507] w-[8%]'></div>

                        <div className='my-7 '>
                            <div className='flex justify-between gap-5'>
                                {
                                    !loading && (
                                        <>
                                            <p className='font-bold text-[16px] md:text-[25px]'>{data?.length > 66 ? "66+" : data?.length} Breeds For you to discover</p>

                                            <Link to="/More " className='flex gap-2 md:gap-5 my-auto'>
                                                <div className='font-medium text-xs flex gap-2'><span className='hidden md:flex'>SEE</span> MORE</div>
                                                <BsArrowRight className=' ' />
                                            </Link>
                                        </>

                                    )
                                }
                            </div>

                            <div>
                                {data && <Card datas={data} loading={loading} />}
                                {loading &&

                                    <div className='flex gap-3 overflow-x-scroll my-5'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <div className='min-w-[50%] md:min-w-[20%]' key={idx}>
                                                    <Skeleton count={5} className='w-40' />
                                                    <Skeleton count={1} className='w-20 mt-3' />
                                                </div>
                                            ))
                                        }

                                    </div>
                                }
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className=''>

                <div className='md:flex justify-between md:px-32 md:py-20'>


                    <div className='my-5  md:my-auto md:w-[40%]'>
                        <div className='border-b-4 border-[#291507] w-[15%] lg:w-[10%]'></div>
                        <h1 className='text-[25px] font-bold my-2'>Why should you have a cat?</h1>
                        <p className='font-medium my-5'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
                        <div className='flex gap-5'>
                            <Link to="/More " className='font-medium text-xs'>READ MORE</Link>
                            <BsArrowRight className='my-auto ' />
                        </div>
                    </div>
                    <div className='flex gap-4 md:w-[50%]'>

                        <div className='flex flex-col gap-4'>
                            <img src={image2} alt="" className=' rounded-lg' />
                            <img src={image1} alt="" className='w-[70%] rounded-lg self-end' />
                        </div>
                        <div className=''>

                            <img src={image3} alt="" className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home