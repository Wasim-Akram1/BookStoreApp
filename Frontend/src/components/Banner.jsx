import React from 'react'

function Banner() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='order-2 w-full md:w-1/2 md:order-1 mt-12 md:mt-32'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>
                            Hello Everyone here to learn something <span className='text-pink-500'>new everyday!!!</span>
                        </h1>
                        <p className='text-xl '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia maxime id blanditiis unde placeat ipsam, quos voluptates harum quas? Cum repellendus ex cumque dolore quae iste?</p>
                        <div>
                        <label className="input validator">
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
                        <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                    </div>
                    <button className="btn mt-6 btn-secondary">Secondary</button>
                </div>

                <div className='order-1 w-full md:w-1/2'>
                    <img src='https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?ga=GA1.1.1432821782.1749380364&semt=ais_hybrid&w=740' className='w-100 h-100 mt-12 md:mt-32 ml-64' alt=''/>
                </div>
            </div>
        </>
    )
}

export default Banner