interface Props{
    title:string,
    purpose:string,
    description:string,
    img?: string
}

const ProjectContainer = ({title, purpose, description, img}:Props) => {
  return (
    <div className='flex flex-col gap-8 w-full mt-8'>
        <div className="border border-gray-300 rounded-2xl p-2">
            <div className="border border-gray-300 rounded-2xl px-4 pt-4 lg:px-8 lg:pt-8 overflow-hidden">
                <p className='text-xs text-'>Featured Project</p>
                <h3 className='text-3xl font-bold'>{title}</h3>
                <p><span className='font-bold'>{purpose} </span>- {description}</p>

                <div className='h-[200px] sm:h-[300px] md:h-[400px] w-full relative -bottom-12 lg:w-[90%] mx-auto bg-black lg:h-[550px] xl:[650px] lg:mt-8 rounded-2xl overflow-hidden'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer
