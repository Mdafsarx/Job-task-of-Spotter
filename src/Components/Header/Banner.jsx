import React from 'react'

export default function Banner() {
    return (
        <div>
            <div className="flex items-center justify-between min-h-[calc(100vh-0px)] px-28 bg-gradient-to-tr from-[#40BDDB] via-[#84CEB7] to-[#D1E189] text-white">

                <div className='space-y-1.5'>
                    <h3 className='capitalize text-6xl font-medium'>Flight booking</h3>
                    <p>Our Tour and Travel Agency offers personalized travel <br />  packages to make your journey memorable.</p>
                </div>

                <img src="https://res.cloudinary.com/dbrceqag4/image/upload/v1733221380/airplane_fodfsd.png" 
                className='w-[420px]'/>

            </div>
        </div>
    )
}
