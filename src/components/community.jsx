import React from "react";

const Community = () => {

    const data = [
        {
            title:'Join a Community',
            description: "Posuere tellus imperdet faclura bitur viverra faucibusy telledute viverra, arcu mi conseq",
            button: "Join Now!"
        },
        {
            title:'Become Volunteer',
            description: "Posuere tellus imperdet faclura bitur viverra faucibusy telledute viverra, arcu mi conseq",
            button: "View All Volunteer"
        },
        {
            title:'Philosophy',
            description: "Posuere tellus imperdet faclura bitur viverra faucibusy telledute viverra, arcu mi conseq",
            button: "Read More"
        }
    ]

    return(
        
            <div className="flex flex-wrap justify-center gap-[80px]">
                {data.map((data, i) =>{
                    return(
                        <div className="max-w-[280px]">
                            <div className="text-[25px] font-[600]">{data.title}</div>
                            <div className="text-[17px] font-[300] mt-[30px]">{data.description}</div>
                            <div className="font-[500] text-[17px] rounded-[100px] py-[18px] px-[30px] bg-[#f5b324] text-[#fff] inline-block w-auto mt-[30px]">{data.button}</div>
                        </div>
                    )
                })}
            </div>
        
    )
}

export default Community;