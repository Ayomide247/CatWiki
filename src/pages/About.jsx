import React, { useState, useEffect } from 'react';
import logo from "../assets/image/CatwikiLogo.svg";
import image2 from "../assets/image/image2.png";
import Footer from '../component/Footer';
import { Link, json, useParams } from 'react-router-dom';
import NavLogo from '../component/NavLogo';



const About = () => {

    const { id } = useParams();
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('selectedQuery'));
        // console.log(storedData);
        if (storedData) {
            setSelected(storedData);
        }
    }, []);


    return (
        <div className='grid justify-between px-5 pt-5 lg:pt-5 lg:px-80  '>
            <NavLogo />

            <section className='my-10 text-[#291507] mt-36'>
                {

                    <div className=' md:flex gap-16 '>
                        <img src={selected?.image?.url} alt="" className='w-[200px] h-[200px] object-fill rounded-2xl shadow-md' />

                        <div className='w-full'>

                            <div>

                                <h1 className='font-bold text-[25px]'>{selected?.name}</h1>
                                <p className='font-medium my-5'>{selected?.description}</p>

                                <div className='flex gap-2 my-3'>
                                    <p className='font-bold'>Temperament:</p>
                                    <span>{selected?.temperament}</span>
                                </div>
                                <div className='flex gap-2 my-3'>
                                    <p className='font-bold'>Origin:</p>
                                    <span>{selected?.origin}</span>
                                </div>
                                <div className='flex gap-2 my-3'>
                                    <p className='font-bold'>Life Span:</p>
                                    <span>{selected?.life_span}</span>
                                </div>
                            </div>

                            <div className=''>

                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Adaptability:</p>
                                    <div className='flex gap-3 ' key={selected.id}>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.adaptability ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }

                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Action Level:</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.affection_level ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Child Friendly:</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.child_friendly ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Grooming:</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.grooming ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Intelligence:</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.intelligence ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Health Issues:</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.health_issues ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Social needs :</p>
                                    <div className='flex gap-3'>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.social_needs ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex justify-between md:justify-start my-5 w-full'>
                                    <p className='font-bold w-[40%]'>Stranger Friendly:</p>
                                    <div className='flex gap-3 '>
                                        {
                                            Array.from({ length: 5 }, (_, idx) => (
                                                <p className={`border-t-8 rounded-sm w-6 md:w-12 mt-2 ${idx < selected?.stranger_friendly ? "border-[#291507]" : "border-sky-100"}`}></p>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                }
            </section>
            <Footer />
        </div>
    )
}

export default About