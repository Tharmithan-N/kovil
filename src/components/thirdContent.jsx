import React from 'react'; 
import nallur from "../assets/images/nallur.jpg"

const ThirdComponent = () => {
    return (
        <div className='border-2 flex justify-center'>
            <div className='flex'>
                <div className='w-1/2'>
                    <div className='text-[#F5B324] text-[18px] font-[600]'>FEW WORDS ABOUT US</div>
                    <div className='text-[#1A2431] text-[41px] font-[700]'>Learn About Hinduism</div>
                    <div className='text-[#303030] text-[17px] font-[300]'>Posuere tellus imperdet facl. Curabitur viverra faucibusy tellus, semper nunc finibus placerat. Suspendi potenti. Praese vesem sem vulputate interdum placerat diam quis nisi porta vitaeves tibulum neque cursus gravida sed sed metus.</div>
                </div>
                <div className='w-1/2'><img src={nallur}/></div>
            </div>
        </div>
            
    );
}

export default ThirdComponent;
