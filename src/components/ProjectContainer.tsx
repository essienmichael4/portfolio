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

                <div className='max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full relative -bottom-12 lg:w-[90%] mx-auto border border-gray-300 lg:max-h-[600px] xl:max-h-[750px] lg:mt-8 rounded-2xl overflow-hidden'>
                    <img src={img} alt="Project image"  className="w-full h-full"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer
