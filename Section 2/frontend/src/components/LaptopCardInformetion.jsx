import { useSearchParams } from "react-router-dom"
import laptopData from "./laptopData"


const LaptopCardInformetion = () => {
    const[searchparams]=useSearchParams()
    const id =searchparams.get("id")
    const [data,setdata]=laptopData.filter((item)=>item.id==id)


    
    return (
        <>
            <div className=" mx-auto bg-white mt-10  p-6 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={data.image}alt="" />
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Lenovo IdeaPad Slim 3 Intel Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home) IdeaPad Slim 3 Thin and Light Laptop  (14.1 Inch, Arctic Grey, 1.37 Kg, With MS Office)
                    </h2>
                    <a href="#" className="text-blue-600 hover:underline text-sm">Be the first to Review this product</a>

                    <div className="text-green-600 font-semibold text-lg">Special price</div>
                    <div className="flex items-baseline space-x-3">
                        <span className="text-2xl font-bold text-black">₹{data.price}</span>
                        <span className="line-through text-gray-500">₹58000.500</span>
                        <span className="text-green-600 font-semibold">38% off</span>
                    </div>

                </div>
            </div>

        </>
    )
}

export default LaptopCardInformetion