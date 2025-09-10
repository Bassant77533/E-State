import { assets } from "../assets/assets"
import { Maintitle } from "./Maintitle"

export const About = () => {
  return (
    <div id="About" className="mx-auto items-center justify-center flex-col flex container  p-14 md:px-20 lg:px-32 ">
        <Maintitle head="About" head2="Our Brand" desc="Passionate About Properties, Dedicated to Your Vision" />
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img className="w-full max-w-lg sm:w-1/2" src={assets.brand_img}/>
            <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                    <div>
                        <p className="text-4xl font-medium text-gray-800"> 10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className="text-4xl font-medium text-gray-800">25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <p className="my-10 max-w-lg ">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn more</button>
            </div>
        </div>
    </div>
  )
}
