import { Navbar } from "./Navbar"
import {motion} from "framer-motion" ; 
export const Header = () => {
  return (
    <div  className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage : "url('./header_img.png')"}}
    id='Header'
    >
        <Navbar/>
        <motion.div
        initial={{ opacity: 0 , y: 100 }}
        transition={{duration : 1.5}}
        whileInView={{ opacity: 1 , y:0}}
        animate={{ scale: 1 }}
        viewport={{once : true }}
         className="container mx-auto text-white text-center py-4 px-6  md:px-20 lg:px-32">
          <h2 className="text-5xl sm:text-6xl md:text-[82px] max-w-3xl  font-semibold   pt-20 inline-block  " >
            Explore homes that fit your dreams
          </h2>
          <div className="space-x-6 mt-16">
            <a href="#Projects" className="border border-white px-8 py-3 rounded " >Projects</a>
            <a href="#Contact" className=" bg-blue-500 rounded px-8 py-3">Contact Us</a>
          </div>
        </motion.div>
    </div>
  )
}
