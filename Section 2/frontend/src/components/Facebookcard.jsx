import React, { useState } from 'react'

const Facebookcard = () => {
    const [like, setLike] = useState(0)
    const [com, setCom] = useState(0)
    const [shr, setShr] = useState(0)
    return (
        
        <div className='w-full flex justify-center mt-3'>

            <div className='rounded-xl shadow-lg p-5 ' style={{ width: "35%" }}>
                <div className='inline-flex'>
                    <div className='w-14 '>
                        <img src="https://freelogopng.com/images/all_img/1657548367Facebook-logo.png" alt="" />
                    </div>
                    <div>
                        <p className='font-bold'>Shubham Balmiki</p>
                        <p className='text-sm text-gray-500'>Sunday at 11:00 pm</p>
                    </div>

                </div>
                <div className='w-1/2 mb-2'>
                    <p>A background Photo!</p>
                </div>

                <div className='w-96 mb-2 '>
                    <img src="https://media.istockphoto.com/id/1403617423/photo/young-woman-tourist-in-sun-hat-and-white-dress-standing-in-front-of-eiffel-tower-in-paris-at.jpg?s=612x612&w=0&k=20&c=5M4C_uB1F7HVhLG1Z82yn3uthqAU_arGvpJiNO88bhg=" alt="" className='rounded'/>
                </div>



                <div className='flex gap-5'>

                    <div className='text-center'>
                        <p className=''>{like} Like</p>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 mt-2 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => setLike(like + 1)}><i class="fa-solid fa-thumbs-up mr-3" style={{ fontSize: "18px" }}></i>Like</button>
                            </div>

                        <div className='text-center'>
                            <p className=''>{com} Comment</p>
                            <button type="button" class="text-white bg-gray-700  focus:ring-4 mt-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setCom(com + 1)} ><i class="fa-solid fa-comment mr-2"></i>Comment</button>
                        </div>
                        <div className='text-center'>
                            <p>{shr} Share</p>
                            <button type="button" class="text-gray-900 bg-white border border-gray-300  mt-2 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => setShr(shr + 1)} ><i class="fa-solid fa-share mr-2"></i>Share</button>
                        </div>
               
                </div>
            </div>
        </div>

    )
}

export default Facebookcard