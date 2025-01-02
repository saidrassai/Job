import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {
    const { setSearchFilter, setIsSearched } = useContext(AppContext);

    const titleRef = useRef(null);
    const locationRef = useRef(null);

    const onSearch = () => {
        setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value,
        });
        setIsSearched(true);
        console.log({
            title: titleRef.current.value,
            location: locationRef.current.value,
        });
    };

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            {/* Hero Section */}
            <div className='bg-gradient-to-r from-blue-800 to-blue-950 text-white py-16 text-center mx-2 rounded-xl'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>
                    Over 10,000+ jobs to apply
                </h2>
                <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>
                    Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!
                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center bg-white rounded text-gray-600 max-w-xl px-4 py-2 mx-auto'>
                    {/* Job Title Input */}
                    <div className='flex items-center w-full sm:w-auto mb-2 sm:mb-0'>
                        <img src={assets.search_icon} alt="Search Icon" />
                        <input
                            type="text"
                            placeholder="Search for jobs"
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={titleRef}
                        />
                    </div>
                    {/* Location Input */}
                    <div className='flex items-center w-full sm:w-auto mb-2 sm:mb-0 sm:ml-2'>
                        <img src={assets.location_icon} alt="Location Icon" />
                        <input
                            type="text"
                            placeholder="Location"
                            className='max-sm:text-xs p-2 rounded outline-none w-full'
                            ref={locationRef}
                        />
                    </div>
                    {/* Search Button */}
                    <button
                        onClick={onSearch}
                        className='bg-purple-800 text-white px-4 py-2 rounded sm:ml-2 hover:bg-purple-700'
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Trusted By Section */}
            <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
                <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
                   
                    <p className='font-medium'>Trusted by</p>
                    <img className='h-6' src={assets.microsoft_logo} alt="Microsoft Logo" />
                    <img className='h-6' src={assets.walmart_logo} alt="Walmart Logo" />
                    <img className='h-6' src={assets.accenture_logo} alt="Accenture Logo" />
                    <img className='h-6' src={assets.samsung_logo} alt="Samsung Logo" />
                    <img className='h-6' src={assets.amazon_logo} alt="Amazon Logo" />
                    <img className='h-6' src={assets.adobe_logo} alt="Adobe Logo" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
