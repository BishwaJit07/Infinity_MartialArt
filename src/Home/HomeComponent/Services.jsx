import React from 'react';

const Services = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around bg-gradient-to-r from-cyan-700 via-blue-800 to-indigo-900 text-center p-2 m-4 rounded-2xl'>
            <div>
                <h3 className='text-pink-400 font-bold'>CALL US 24/7</h3>
                <p className='text-white'>+6622-3443-974</p>
            </div>
            <div className="divider" style={{ borderColor: 'white', borderWidth: '2px' }}></div>

            <div className='my-4 md:my-0'>
                <h3 className='font-bold text-pink-400'>SEASON STREET 45/2</h3>
                <p className='text-white'>LOS ANGELES, INC - 4502</p>
            </div>
            <div className="divider" style={{ borderColor: 'white', borderWidth: '2px' }}></div>
            <div>
                <h3 className='font-bold text-pink-400'>WORKING HOURS</h3>
                <p className='text-white'>DAILY: 9AM - 8PM</p>
            </div>
        </div>
    );
};

export default Services;