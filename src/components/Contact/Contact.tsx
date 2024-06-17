const Contact = () => {
  return (
    <div id="contact" className='container px-4 lg:px-8 mx-auto mb-8 flex flex-wrap w-full gap-8 justify-between'>
        <div className="w-full md:w-[45%] flex flex-col gap-4">
            <h2 className='text-2xl lg:text-3xl xl:text-5xl font-bold text-[#0C0C0C96]'>LET’S TALK ABOUT A PROJECT, COLLABORATION OR A JOB OPPORTUNITY</h2>
            
        </div>
        <div className="w-full md:w-[50%]">
            <h3 className="font-bold text-sm text-[#0C0C0C96]">&lt;/ Have An Idea /&gt;</h3>
            <h3 className="font-bold text-sm text-[#0C0C0C96]">Contact me and I will get back to you [very] quickly</h3>
            <div className="flex flex-col gap-4 mt-4 w-full">
                <div className="flex flex-wrap gap-4">
                    <div>
                        <p className="text-xs font-bold text-gray-500">Email</p>
                        <p className="text-sm font-bold">essienmichael4@gmail.com</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500">Phone</p>
                        <p className="text-sm font-bold">+233 20 924 1336</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-gray-500">Location</p>
                        <p className="text-sm font-bold">Tema - Greater Accra, Ghana</p>
                    </div>
                </div>
                <div className="flex gap-4 mt-4">
                    
                    <a href="https://www.linkedin.com/in/essien-michael" target='_blank' rel='noopener noreferrer' className=" border border-gray-300 px-4 py-2 text-xs rounded-full hover:bg-gray-200">LINKEDIN</a>
                    <a href="https://www.github.com/essienmichael4" target='_blank' rel='noopener noreferrer' className=" border border-gray-300 px-4 py-2 text-xs rounded-full hover:bg-gray-200">GITHUB</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
