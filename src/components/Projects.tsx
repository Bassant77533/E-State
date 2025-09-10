import { useEffect, useState } from "react"
import { assets, projectsData } from "../assets/assets"
import { Maintitle } from "./Maintitle"

export const Projects = () => {
    const [currentIndex , setCurrentIndex] = useState(0);
    const [cardstoshow , setCardstoshow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((previndex) => (previndex + 1 ) % projectsData.length) ; 
    }
    const prevProject = () => {
        setCurrentIndex((previndex) => previndex == 0 ?  projectsData.length -1 : previndex -1  )
    }
    useEffect(()=>{
        const updatecardstoshow = ()=>{
            if(window.innerWidth > 1024){
                setCardstoshow(projectsData.length) ; 
            }else{
                setCardstoshow(1)
            }
        }
        updatecardstoshow();
        window.addEventListener('resize' , updatecardstoshow)
        return ()=>  window.removeEventListener('resize' , updatecardstoshow)
    },[])
  return (
    <div id="Projects" className=" flex-col p-14 md:px-20 lg:px-32 container flex items-center justify-center mx-auto text-center">
        <Maintitle head="Projects" head2="Completed" desc="Crafting Spaces, Building Legacies—Explore Our Portfolio" />
        <div className=" self-end mb-8">
            <button onClick={prevProject}><img className="cursor-pointer p-3 bg-gray-200 rounded mr-2" src={assets.left_arrow} alt="pervious"  aria-label="Previous Porject"/></button>
            <button onClick={nextProject}>< img className=" cursor-pointer p-3 bg-gray-200 rounded ml-2" src={assets.right_arrow} alt="next"   aria-label="Next Porject" /></button>
        </div>
        <div className="overflow-hidden">
            <div className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform : `translateX(-${currentIndex * 100 / cardstoshow}%)` }}
            >
                {
                    projectsData.map((project , index)=>(
                        <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                            <img className="w-full h-auto mb-14" src={project.image} alt={project.title}/>
                            <div className=" absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="bg-white text-start inline-block w-3/4 px-4 py-2 shadow-md">
                                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                    <p className="text-gray-500 text-sm">
                                        { project.price} <span> | </span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)
}
