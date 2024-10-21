import hero from '../../assets/hero.jpg'
import hero1 from '../../assets/hero1.jpg'
import resume from '../../assets/Resume.pdf'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
  return (
    <>
        <Desktop />
        <Mobile />
    </>   
  )
}

function Desktop(){
    return (
        <div id='home' className='hidden sm:block sm:h-[500px] w-full max-w-[1710px] mx-auto md:mt-[6rem] lg:mt-0 lg:h-screen lg:max-h-[870px] relative'>
            <div className='absolute h-screen sm:h-full w-full lg:w-[45%] xl:w-[38%] right-0 top-0 2xl:w-[38%]'>
                <img src={hero} alt="A nice picture of moi"  className='hidden lg:block w-[100%] h-[100%] bg-cover'/>
            </div>
            <div className='container relative px-8 mx-auto h-full'>
                <div className='sm:w-full lg:w-[60%] h-full gap-2 flex flex-col justify-center sm:items-center lg:items-start'>
                    <p className='text-sm 2xl:text-lg text-gray-400'>Full-stack Software Engineer</p>
                    <h2 className='sm:text-6xl 2xl:text-8xl font-bold'>Hello, I’m </h2>
                    <h2 className='sm:text-6xl 2xl:text-8xl font-bold'><span className='text-[#05A5FF]'>Michael Essien</span></h2>

                    <p className='w-[80%] text-sm 2xl:text-lg sm:text-center lg:text-start'>I am a passionate engineer dedicated to turning ideas into creative solutions.</p>
                    <div className='flex gap-4 mt-2'>
                        <a target='_blank' rel='noopener noreferrer' href={resume} className='px-4 py-2 bg-[#05A5FF] text-white rounded'>Download Resume</a>
                        <a href="#contact" className='px-4 py-2 border border-[#05A5FF] text-[#05A5FF] rounded'>Contact Me</a>
                    </div>
                </div>
                <div className='absolute bottom-4 lg:flex items-center justify-between hidden lg:w-[50%]'>
                    <div className="flex gap-2 items-center">
                        <a href="https://www.linkedin.com/in/essien-michael" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-4'><FontAwesomeIcon className='w-6 h-6 text-[#0C0C0C65]' icon={faLinkedin} /></a>
                        <a href="https://www.github.com/essienmichael4" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-4'><FontAwesomeIcon className='w-6 h-6 text-[#0C0C0C65]' icon={faSquareGithub}/></a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='island text-xl text-[#0C0C0C75]'>Scroll Down</p>
                        <FontAwesomeIcon className='w-4 h-4 text-[#0C0C0C65]' icon={faComputerMouse}/>
                    </div>
                </div>
            </div>  
        </div>
    )
}

function Mobile(){
    return (
        <div className='sm:hidden w-full mx-auto h-screen relative'>
        <div className='absolute h-screen  w-full right-0 top-0 -z-10'>
            <img src={hero1} alt="A nice picture of moi"  className='block w-full h-full bg-cover'/>
            <div className='absolute top-0 w-full h-full bg-black opacity-50 z-10'></div>
        </div>
        <div className='container px-4 mx-auto h-full z-10 py-8'>
            <div className='w-full h-full gap-2 flex flex-col justify-end'>
                <p className='text-white'>Full-stack Software Engineer</p>
                <h2 className='text-5xl font-bold text-white'>Hello, I’m <br /><span className='text-[#05A5FF]'>Michael Essien</span></h2>
                <p className='text-white text-sm'>I once heard that, “If we want users to like our software, we should design it to behave like a likeable person. Define what the product will do before you design how the product will do it. Usability strength is in identifying problems, while design strength is in identifying solutions”. That has been my principle thus far.</p>
                <div className='flex gap-4 mt-2'>
                    <Link to={"/"} className='px-4 py-2 bg-white text-black rounded'>Download Resume</Link>
                    <a href="#contact" className='px-4 py-2 border border-white text-white rounded'>Contact Me</a>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Hero
