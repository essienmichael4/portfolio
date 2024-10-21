import arrow from '../../src/assets/arrow.svg'

interface Props{
    title:string,
    purpose:string,
    description:string,
    img?: string,
    stacks?: string[],
    web?:string,
    github?:string
}

const ProjectContainer = ({title, purpose, description, img, stacks, web, github}:Props) => {
  return (
    <div className='flex flex-col gap-8 w-full mt-8'>
        <div className="border border-gray-300 rounded-2xl p-2">
            <div className="relative border border-gray-300 rounded-2xl px-4 pt-4 lg:px-8 lg:pt-8 overflow-hidden">
                <p className='text-xs text-[#05A5FF]'>Featured Project</p>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <p><span className='font-bold'>{purpose} </span>- {description}</p>
                <a href={web ? web : github} target='_blank' rel='noopener noreferrer' className='absolute right-4 top-8 lg:right-8 lg:top-12'>
                    <img src={arrow} className='w-8 h-8  text-white' alt="Arrow icon to project desription" />
                </a>
                
                {
                    stacks && <div className='mt-2 flex gap-2 flex-wrap'>
                        {
                            stacks.map((stack)=>{
                                return <span className='bg-[#c8ebff] text-[#05A5FF] rounded-md py-1 px-2'>{stack}</span>
                            })
                        }
                    </div>
                }
                    
                <div className='max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full relative -bottom-12 lg:w-[90%] mx-auto border border-gray-300 lg:max-h-[600px] xl:max-h-[750px] lg:mt-8 rounded-2xl overflow-hidden'>
                    <img src={img} alt="Project image"  className="w-full h-full"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer
