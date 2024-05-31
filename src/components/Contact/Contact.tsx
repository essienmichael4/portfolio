const Contact = () => {
  return (
    <div className='container px-4 lg:px-8 mx-auto mb-8 flex flex-wrap w-full gap-8 justify-between'>
        <div className="w-full md:w-[45%] flex flex-col gap-4">
            <h2 className='text-2xl lg:text-3xl xl:text-4xl font-bold'>LET’S TALK ABOUT A PROJECT, COLLABORATION OR A JOB OPPORTUNITY</h2>
            <div className="flex flex-wrap gap-4">
                <div>
                    <p className="text-xs">Email</p>
                    <p className="text-sm font-bold">essienmichael4@gmail.com</p>
                </div>
                <div>
                    <p className="text-xs">Phone</p>
                    <p className="text-sm font-bold">+233 20 924 1336</p>
                </div>
                <div>
                    <p className="text-xs">Location</p>
                    <p className="text-sm font-bold">Tema - Greater Accra, Ghana</p>
                </div>
            </div>
            <div className="flex gap-4 mt-4">
                <div className=" border border-gray-300 px-4 py-2 text-xs rounded-full">LINKEDIN</div>
                <div className=" border border-gray-300 px-4 py-2 text-xs rounded-full">GITHUUB</div>
            </div>
        </div>
        <div className="w-full md:w-[50%]">
            <h3 className="font-bold text-sm">&lt;/ Have An Idea /&gt;</h3>
            <h3 className="font-bold text-sm">Fill the form and I will get back to you [very] quickly</h3>
            <div className="flex flex-col gap-4 mt-4 w-full">
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 w-full">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-sm">Full name</label>
                        <input type="text" className="border border-gray-300 rounded-sm"/>
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="" className="text-sm">Email</label>
                        <input type="text" className="border border-gray-300 rounded-sm"/>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="" className="text-sm">Type your message</label>
                    <textarea name="" id="" className="border w-full border-gray-300 rounded-sm"></textarea>
                </div>
                <button className=" border border-gray-300 px-4 py-2 w-32 text-xs rounded-full">Send message</button>
            </div>
        </div>
        
    </div>
  )
}

export default Contact
