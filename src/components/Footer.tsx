import { assets } from "../assets/assets"

export const Footer = () => {
  return (
    <div id="Footer" className="overflow-hidden w-full bg-gray-900 text-white  md:px-20 lg:px-32   px-4 pt-10">
        <div className="container mx-auto grid grid-cols-5 gap-10 md:gap-20 border-b-1 border-b-gray-700 pb-8">
            <div className=" col-span-5 md:col-span-2">
                <h1><span><img src={assets.logo_dark}/></span></h1>
                <p className="mt-6 text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
            </div>
            <div className="col-span-5 md:col-span-1">
                <h1 className="text-xl font-semibold mb-6 ">company</h1>
                <ul className="flex flex-col gap-2 text-gray-400 ">
                    <li><a className="hover:text-white" href="#Home">Home</a></li>
                    <li><a className="hover:text-white" href="#About">About Us</a></li>
                    <li><a className="hover:text-white" href="#Contact">Contact Us</a></li>
                    <li><a className="hover:text-white" href="#Home">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="col-span-5 md:col-span-2">
                <h1 className="text-xl font-semibold mb-6 ">subscribe to our newsletter</h1>
                <p className="text-gray-400 max-w-80">The latest news, articles, and resources, sent to your inbox weekly.</p>
                <form className="flex gap-2 mt-3">
                    <input className="focus:outline-none px-2 bg-gray-800 rounded" type="email"  placeholder="Enter your email"/>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="text-gray-400 text-center py-6">
            Copyright 2024 © GreatStack. All Right Reserved.
        </div>
    </div>
  )
}
