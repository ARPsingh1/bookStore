import React from 'react'
import Banner_img from '../assets/banner-image.jpg'
const Banner = () => {
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
                <div className="overflow-hidden flex flex-col-reverse md:flex-row flex-col mt-20 gap-9 md:gap-20">
                    <div className="w-full w-1/2">
                        <div className="flex gap-10 flex-col">

                            <h1 className="text-5xl">Welcome to the World of Books - Explore, Discover, Enjoy!</h1>
                            <p>Discover a wide selection of books across all genres, from timeless classics to the latest bestsellers. Find your next favorite read today!</p>
                            <label className="input validator  w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                        </div>
                            <button className="btn btn-secondary mt-8">Secondary</button>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>



                    <div className="w-full w-1/2">


                      <img src={Banner_img} alt="" className="md:size-120 p-4 md:p-10 rounded-2xl"/>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
