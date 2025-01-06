
import React from "react";
import gemini from '../assets/Gemini.png'
import copeople from '../assets/copeople.png'
import rename from '../assets/Rename.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Gemini Clone' && <a href="https://gemini-flax-kappa.vercel.app/">
                <img className="w-full rounded-t-lg h-auto object-cover " src={gemini} alt="" />
            </a>}
            {title=='Officers Duty Roaster' && <a href="https://ioclroaster-varsha-awasthis-projects.vercel.app/">
                <img className="w-full rounded-t-lg h-auto object-cover " src={rename} alt="" />
            </a>}
            {/* {title=='Co People' && <a href="https://gemini-flax-kappa.vercel.app/">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>} */}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                    
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    // {
    //     title:'Co People',
    //     description:'Co People is a dynamic web application I crafted using React, Node JS and React. This project is a modern and engaging social platform that allows users to connect, share content and interact seamlessly.',
    //     image: {gemini},
    //     git:'https://github.com/nithingooud/CoPeople',
    //     technologies:['MongoDb' ,'ReactJS' , 'NodeJS']
    // },
    {
        title:'Gemini Clone',
        description:'Gemini Clone has been created using using React JS, tailwind CSS and Generative API of Gemini. This clone has feature of retaining previous responses which helps users to see their serach history.',
        image: {copeople},
        git:"https://github.com/varshaa-7/Gemini",
        technologies:[ 'React JS', 'tailwind CSS', 'Generative API']
    },
    {
        title:'Officers Duty Roaster',
        description:'Officers duty roater is the employee management system in which shifts of employee changes automatically after one week. It has option to maintain leaves, leaves date, reason, their post, and also some special instructions.',
        image: {rename},
        git:"https://github.com/varshaa-7/Employee_front",
        technologies:[ 'React JS', 'MongoDb', 'NodeJs']
    }
]

export default Projects