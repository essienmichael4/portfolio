import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Desktop />
        <Mobile />
    </>
  )
}

function Desktop(){
    return <header className='hidden fixed top-0 w-full h-[6rem] bg-[#0c0c0c57] backdrop-blur-sm md:block z-20'>
    <div className="container px-8 mx-auto flex h-full justify-between items-center">
        <Link to="/"><h1 className='island text-6xl text-white'>ME</h1></Link>
        <nav className='flex h-full items-center gap-8'>
            <ul className='flex gap-8 h-full items-center'>
                <li className='list-none h-full'><Link to="/" className='flex items-center justify-center px-2 text-white h-full  border-b-4 border-white'>Home</Link></li>
                <li className='list-none h-full'><Link to="/" className='flex items-center justify-center px-2 text-white h-full'>Projects</Link></li>
                <li className='list-none h-full'><Link to="/" className='flex items-center justify-center px-2 text-white h-full'>About</Link></li>
            </ul>
            <span className='h-full w-[1px] bg-white'></span>
            <li className='list-none'><Link to="/" className='text-white bg-[#05A5FF] py-2 px-4 rounded'>Let's Chat</Link></li>
        </nav>
    </div>
</header>
}

function Mobile(){
    const [isOpen, setIsOpen]=useState(false)
    return (
        <>
            <header className='block fixed top-0 w-full bg-[#0c0c0c57] h-[4rem] backdrop-blur-sm md:hidden z-20'>
                <div className="container mx-auto h-full flex justify-between items-center px-4">
                    <Link to="/"><h1 className='island text-4xl text-white'>ME</h1></Link>

                    <div className='w-8 h-8 bg-black' onClick={()=>{
                        setIsOpen(prev => !prev)
                    }}></div>
                </div>
            </header>
            <nav className={`${isOpen ? "fixed inset-0 flex": "hidden"} bg-[#0c0c0c57] backdrop-blur-sm items-center justify-center gap-8 z-50`}>
            <div className='absolute right-4 top-4 w-8 h-8 bg-black' onClick={()=>{
                        setIsOpen(prev => !prev)
                    }}></div>
                <ul className='flex flex-col gap-4  items-center'>
                    <li className='list-none'><Link to="/" className='flex items-center justify-center px-2 text-white text-3xl'>Home</Link></li>
                    <li className='list-none'><Link to="/" className='flex items-center justify-center px-2 text-white text-3xl'>Projects</Link></li>
                    <li className='list-none'><Link to="/" className='flex items-center justify-center px-2 text-white text-3xl'>About</Link></li>
                    <li className='list-none'><Link to="/" className='flex items-center justify-center px-2 text-white text-3xl'>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
