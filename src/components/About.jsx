import { BiSolidRightArrow } from 'react-icons/bi'
import resume from "../assets/Updated-Resume.pdf"

const About = () => {
    const items = [
        {
            skill: 'LARAVEL'
        },
        {
            skill: 'NODEJS'
        },
        {
            skill: 'MYSQL'
        },
        {
            skill: 'PYTHON'
        },
        {
            skill: 'JAVASCRIPT'
        },
        {
            skill: 'REACTJS'
        },
        {
            skill: 'GIT & GITHUB'
        },
        {
            skill: 'NPM'
        },
        {
            skill: 'TAILWIND CSS'
        },
        {
            skill: 'AXIOS/FETCH API'
        },
    ]

  return (
    <div className="flex flex-col items-start justify-center w-full mt-28 px-8 md:px-14 md:mt-40 lg:flex-row lg:px-24 
    lg:items-center lg:justify-between xl:px-52 xl:mt-72">
        <div className="flex flex-col items-start justify-center w-full lg:w-[55%]">
            <div className="flex items-center justify-start w-full mb-5 md:w-[60%] lg:w-full">
               <p className="text-[15px] mt-1 md:mt-2 md:text-[19px] lg:text-[20px] xl:mt-1">
                   01.
               </p>
               <p className="text-[23px] font-medium ml-2 whitespace-nowrap text-[#C4C4C4] md:text-[27px] md:font-bold lg:text-[28px]">
                   About Me
               </p>
               <hr className="border-[0.01em] border-[#3d3b4b] w-full ml-2" />
            </div>
            <div className='md:w-[90%] lg:-[100%]'>
                <p className="text-[13px] font-normal leading-5 mb-2 text-[#C4C4C4] md:text-[16px] md:leading-6 lg:text-[16px] lg:font-light xl:text-[18px] xl:leading-8">
                    My name is Owolabi Idris, My journey into software engineering began with a fascination for the intricate workings of code and databases. I'm passionate about building the backbone of applications, ensuring they not only function flawlessly but also remain adaptable to meet evolving demands. 
                    From designing data models to optimizing algorithms, I find fulfillment in the intricacies of backend development. My expertise lies in crafting efficient APIs, managing databases, and implementing server-side logic with precision and attention to detail. 
                </p>

                <p className="text-[13px] font-normal leading-5 mb-2 text-[#C4C4C4] md:text-[16px] md:leading-6 lg:text-[16px] lg:font-light xl:text-[18px] xl:leading-8">
                     While coding keeps me engaged, I also have a soft spot for designs and i love listening to good music. 
                </p>
            </div>
        </div>

        <div className="mt-5 md:w-[60%] md:mt-8 lg:w-[40%] lg:mt-0 lg:ml-10">
            <div className='xl:mb-6'>
                <h1 className="text-[21px] font-bold mb-4 text-[#74aabc] xl:text-[27px]">
                    Skills
                </h1>
            </div>
            <div className="flex flex-wrap items-start justify-between w-full">
                {items.map((item)=>{
                    return(
                <div key={item.index} className="flex items-center justify-start w-[40%] mb-8">
                    <BiSolidRightArrow className='text-[#74aabc] text-[12px]' />
                    <p className="text-[12px] text-[#C4C4C4] ml-2 whitespace-nowrap lg:text-[13px] xl:text-[16px]">
                        {item.skill}
                    </p>
                </div>

                    )
                })
                }
        
            </div>

            <a href={resume} download className='text-[13px] font-medium text-[#ba7cf7] underline xl:mt-6'>
                And a whole lot more
            </a>
        </div>
    </div>
  )
}

export default About