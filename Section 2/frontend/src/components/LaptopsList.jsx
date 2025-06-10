import React, { useEffect, useState } from 'react'
import laptopData from './laptopData'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import { FilterAlt, Search } from '@mui/icons-material';

const LaptopsList = () => {
    const [data, setdata] = useState([]);
    const [selectBrand, setSelectBrand] = useState("")
    const [selectprice, SetSelectPrice] = useState(0);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if(laptopData){
            setdata(laptopData)
        }
    }, [])

    console.log(data, "data value after useEffect");
    
    const brandOptions = [
        laptopData.map((item, idx) => {
            return (
                item?.brand
            )
        })
    ]

    console.log(brandOptions, "brandOptions");

    const handleFilter = () => {
        setOpen(false);
        if (selectBrand && !selectprice) {
            const filteredData = laptopData.filter((item) => item?.brand == selectBrand);
            setdata(filteredData)
        }
        if (!selectBrand && selectprice) {
            const filteredData = laptopData.filter((item) => item?.price <= selectprice);
            setdata(filteredData)
        }
        if (selectBrand && selectprice) {
            const filterData = laptopData.filter((item) => item?.brand == selectBrand && item?.price <= selectprice);
            setdata(filterData);
        }
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const style = {

        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 2,
    };

    const onSerchInput = (e) => {
        let search = e.target.value
        const filterData = laptopData.filter((item) => item?.model.toLowerCase().includes(search.toLowerCase().trim()));
        setdata(filterData);

    }

    const handleSelect = (e) => {
        console.log(e.target.value, "selected brand");
        setSelectBrand(e.target.value);
    }
    const handleprice = (e) => {
        let price = e.target.value
        console.log(e.target.value, "selected price");
        SetSelectPrice(price)
    }

    return (
        <>
            <div style={{ marginInline: "100px" }}>
                <div className='flex justify-between mt-5'>
                    <div className='relative'>
                        <Search className='text-gray-4 00' style={{ position: "absolute", top: 9, left: 8 }} />
                        <input type="text" className='border-gray-300 rounded w-96 ps-10 py-2 '
                            onChange={onSerchInput}
                            placeholder='Search...'
                        />
                    </div>
                    <div>
                        <button className='bg-blue-500 px-5 py-2 rounded-lg text-white cursor-pointer' onClick={handleOpen}>
                            <FilterAlt /> Filter By
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-5'>
                    {
                        data.map((item, index) => {
                            return (
                                <Link to={`/laptop-card/?id=${item.id}`}><div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm shadow-2xl  ">
                                    <div className=' flex justify-center'>
                                        <div className='w-72 h-48 '>
                                            <img className="p-8 rounded-t-lg"
                                                src={item.image}
                                                alt="" />
                                        </div>
                                    </div>
                                    <div className="px-5 pb-5 ">
                                        <Link to="#">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {item.brand}
                                            </h5>
                                        </Link>
                                        <Link to="#">
                                            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {item.model}
                                            </h5>
                                        </Link>

                                        <div className="flex items-center justify- mt-5">
                                            <span className="text-2xl font-bold text-gray-900 dark:text-white ">
                                                <i class="fa-solid fa-indian-rupee-sign"></i><span className='ms-2'>{item.price}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div></Link>
                            )
                        })
                    }

                </div>
            </div>

            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='mb-10 '>
                        <h1>Filter By</h1>
                        <div className='grid grid-cols-2 gap-5 mt-5 ms-5'>
                            <div className=''>
                                <label htmlFor="" className='me-2'>Select Brand</label>
                                <select className='w-full mt-2' onChange={handleSelect}>
                                    <option value="0">Select Brand</option>
                                    {
                                        brandOptions[0].map((item, index) =>
                                            <option key={index}>{item}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="" className='me-2'>Select Minmum Price Range </label>
                                <select className='w-full mt-2' onChange={handleprice}>
                                    <option value="">Select Price </option>
                                    <option >{`<= 30000`}</option>
                                    <option > {"<= 40000"}</option>
                                    <option > {"<= 50000"}</option>
                                    <option > {"<= 60000"}</option>
                                    <option > {"<= 70000"}</option>
                                    <option > {"<= 100000"}</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <Divider />
                    <div className='mt-5 flex justify-end'>
                        <button className='bg-blue-500 text-white px-5 py-2 rounded cursor-pointer'
                            onClick={handleFilter}>
                            Search
                        </button>
                        <button className='bg-gray-300 px-5 py-2 rounded ms-3 cursor-pointer' onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </Box>
            </Modal>

        </>
    )
}

export default LaptopsList