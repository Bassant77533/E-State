import { assets, testimonialsData } from "../assets/assets"
import { Maintitle } from "./Maintitle"

export const Testmonials = () => {
  return (
     <div id="Testmonials" className="mx-auto items-center justify-center flex-col flex container  p-14 md:px-20 lg:px-32">
        <Maintitle head="Customer" head2="Testmonials" desc="Real Stories from Those Who Found Home with Us"/>
            <div className="flex  flex-wrap justify-center gap-8 mt-10 " >
                {
                    testimonialsData.map((test  , index  )=>
                    (
                        <div key={index} className=" hover:shadow-2xl hover:-translate-y-6   duration-300 ease-in-out  text-center px-8 py-12 max-w-[340px]  bg-white shadow-lg  border border-gray-200 rounded">
                            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={test.image} alt={test.alt}/>
                            <p className="font-medium text-gray-700 text-xl">{test.name}</p>
                            <p className="text-gray-500 mb-4 text-sm">{test.title}</p>
                            <div className="flex justify-center gap-1 text-red-500 mb-4">
                                {
                                    Array.from({length : test.rating} , (_item , index)=>(
                                        <img key={index} src={assets.star_icon} />
                                    ))
                                }
                            </div>
                            <p className="text-gray-500 ">{test.text}</p>
                        </div>
                    )
                    )
                }
            </div>
     </div>
  )
}
