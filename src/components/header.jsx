import React from 'react';

const Header = () => {
    return(
        <div className='rounded-[10px] max-w-[1230px] items-center mx-[auto] mt-[50px] bg-[#fff] relative z-10'>
            <div className='flex px-[50px]'>
                <div>
                    <img src="https://sktperfectdemo.com/themepack/temple/wp-content/themes/skt-hinduism/images/logo.png" className='h-[47px] w-[128px] mt-[35px]'/>  
                </div>
                <div className='flex ml-[auto] py-[45px] gap-[40px]'>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>Home</div>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>Activities</div>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>About</div>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>Events</div>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>Blog</div>
                    <div className='text-[17px] font-[400] hover:text-[#f5b324] cursor-pointer'>Contact</div>
                </div>
                <div className='items-center my-[auto] ml-[40px]'>
                    <div className='rounded-[40px] py-[15px] px-[35px] bg-[#f5b324] text-white hover:bg-[#000] cursor-pointer'>Donate Now</div>
                </div>
            </div>
        </div>
    )
}

export default Header;