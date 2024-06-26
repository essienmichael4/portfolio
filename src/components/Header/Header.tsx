import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

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
            <ul className='flex gap-6 h-full items-center'>
                <li className='list-none h-full'><a href="#home" className='flex items-center justify-center px-2 text-white h-full'>Home</a></li>
                <li className='list-none h-full'><a href="#projects" className='flex items-center justify-center px-2 text-white h-full'>Projects</a></li>
                <li className='list-none h-full'><a href="#about" className='flex items-center justify-center px-2 text-white h-full'>About</a></li>
            </ul>
            <span className='h-full w-[2px] bg-gray-300'></span>
            <li className='list-none'><a href="#contact" className='text-white bg-[#05A5FF] py-2 px-4 rounded flex gap-2 items-center'>Let's Chat <FontAwesomeIcon icon={faCommentDots} /></a></li>
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

                    <div className='w-8 h-8 text-white' onClick={()=>{
                        setIsOpen(prev => !prev)
                    }}>
                        <img src={menu} className='w-8 h-8 text-white' alt="Menu icon" />
                    </div>
                </div>
            </header>
            <nav className={`${isOpen ? "fixed inset-0 flex": "hidden"} bg-[#0c0c0c57] backdrop-blur-sm items-center justify-center gap-8 z-50`}>
            <div className='absolute right-4 top-4 w-8 h-8 ' onClick={()=>{
                        setIsOpen(prev => !prev)
                    }}>
                        <img src={close} className='w-8 h-8 text-white' alt="Close icon" />
                    </div>
                <ul className='flex flex-col gap-4  items-center'>
                    <li className='list-none'><a href="#home" className='flex items-center justify-center px-2 text-white text-3xl'>Home</a></li>
                    <li className='list-none'><a href="#projects" className='flex items-center justify-center px-2 text-white text-3xl'>Projects</a></li>
                    <li className='list-none'><a href="#about" className='flex items-center justify-center px-2 text-white text-3xl'>About</a></li>
                    <li className='list-none'><a href="#contact" className='flex items-center justify-center px-2 text-white text-3xl'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
