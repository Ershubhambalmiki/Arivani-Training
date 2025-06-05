import React, { useState } from 'react'

const Home = () => {
    const [count, setcount] = useState(0)
   
    return (
        <div>
            <h3>Counter value : {count}</h3>
            <button className='bg-success px-2 py-1 rounded text-white mx-5 mt-3' onClick={() => setcount(count + 1)}>Add Vlaue +</button>

            <button className='bg-danger px-2 py-1 rounded text-white' onClick={() => setcount(count - 1)}>Add Vlaue -</button>

            <button className='bg-secondary px-2 py-1 rounded text-white mx-5' onClick={() => setcount(0)}>Reset </button>
            <hr />
            {/* ---------------Background color change----------- */}

            <div className='mt-5'>
                <label htmlFor="">Choose a color</label>
                <br />
                <input type="color" onChange={(e) => {
                    document.body.style.backgroundColor = e.target.value;
                }
                } />
            </div>

            {/* ------------chosoe file ------------ */}

            <hr />
            <div className='mt-5'>
                <input type="file" className='' onChange={(e) => console.log(e.target.value)

                } />
            </div>
            <hr />
            {/* -----------------sinup page------------- */}

         

        </div>


    )
}

export default Home