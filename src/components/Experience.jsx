import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='pb-4 mb-10'>
     <h2 className='experience_top my-20 text-center text-4xl font-DancingScript'>Experience</h2>
      <div>
          {
               EXPERIENCES.map((experience, index)=>{
                    return (
                         <div key={index} className='experience_content mb-8 flex flex-wrap lg:justify-center'>
                              <div className='w-full lg:w-1/4'> 
                                   <p className='mb-2 text-sm text-stone-400'>{experience.year} </p>
                              </div>
                              <div className='w-full max-w-xl lg:w-3/4'>
                                   <h3 className='mb-2 font-semibold text-green-400'>{experience.role } 
                                       - <span className='text-sm text-stone-500'>{experience.company}</span>
                                   </h3>
                                   <p className='mb-4 text-stone-400 '>{experience.description}</p>
                                   <div className='w-full flex flex-wrap gap-2'>
                                   {
                                        experience.technologies.map((tech, index)=>{
                                           return(
                                             <span className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300   ' key={index}>{tech}</span>
                                           )  
                                        })
                                   }
                                   </div>
                              </div>
                         </div>
                    )
               })
          }
      </div>
    </div>
  )
}

export default Experience
