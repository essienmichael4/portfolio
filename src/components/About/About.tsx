import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import about from '../../assets/about.jpg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import ts from '../../assets/ts.svg'
import angular from '../../assets/angular.svg'
import react from '../../assets/react.svg'
import next from '../../assets/nextjs.svg'
import nest from '../../assets/nestjs.svg'
import java from '../../assets/java.svg'
import jira from '../../assets/jira.svg'
import node from '../../assets/node.svg'
import express from '../../assets/express.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import scss from '../../assets/scss.svg'
import tailwindcss from '../../assets/tailwindcss.svg'
import springboot from '../../assets/spring-boot.svg'
import prisma from '../../assets/prisma.svg'
import mysql from '../../assets/mysql.svg'
import postgresql from '../../assets/postgresql.svg'
import postman from '../../assets/postman.svg'
import figma from '../../assets/figma.svg'

const About = () => {
  return (
    <div id='about' className='container px-4 lg:px-8 mx-auto my-8 py-8'>
        <h2 className='text-6xl text-[#0C0C0C96]'>ABOUT ME</h2>
        <p className="text-xs text-[#05A5FF]">Everyone has a unique story. Here is mine.</p>
        <div className="relative w-full flex items-center md:gap-16 lg:gap-36 mt-8">
            <div className="w-full md:w-[45%] flex flex-col gap-4">
                <p className="text-sm lg:text-xl">I always thought I’d become an architect growing up, designing houses for people to stay in. I guess I’m still in the business of designing and creating, but not as an architect.</p>
                <p className="text-sm lg:text-xl">I am Michael Essien, a full-stack software engineer based in Accra - Ghana. I am passionate about designing and creating beautiful, stunning and usable software that helps empower people and help them achieve their goals.</p>
                <p className="text-sm lg:text-xl">When I’m not in front of a computer screen or programming, I’m probably reading, singing or learning a new song.</p>
                <p className="text-sm lg:text-xl">I am happy and exited to make a leap and continue refining my skills with the right company. If you are looking for a great developer or engineer to add to your team, I’d love to hear from you.</p>
            </div>
            <div className='hidden md:block md:w-[30%] md:h-[300px] lg:w-[28%]  lg:h-[400px]'>
                <img src={about} alt="Also another picuter of me" className='w-full h-full' />
            </div>
            <div className="hidden absolute -right-24 bottom-16 md:flex items-center gap-4 rotate-90">
                <p className='text-gray-300'>essienmichael4@gmail.com</p>
                <div className='w-16 h-1 bg-gray-300'></div>
            </div>
        </div>
        <div className='flex items-center gap-4 mt-8'>
            <a href="https://www.linkedin.com/in/essien-michael" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-4'><FontAwesomeIcon className='w-8 h-8 text-[#0C0C0C65]' icon={faLinkedin} /></a>
            <a href="https://www.github.com/essienmichael4" target='_blank' rel='noopener noreferrer' className='flex items-center justify-center gap-4'><FontAwesomeIcon className='w-8 h-8 text-[#0C0C0C65]' icon={faSquareGithub}/></a>
        </div>
        <div className='py-8'>
            <h3 className='text-3xl text-[#0C0C0C96]'>Skills & Tools</h3>
            <div className='flex justify-start items-start gap-8 flex-wrap'>
                <div className='w-full sm:w-[60%]'>
                    <p className="text-xs text-[#05A5FF]">Technical Skills</p>
                    <div className='flex flex-wrap gap-4 w-full'>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={html} className='w-8 h-8' alt="" />
                            <span className='text-xs'>html</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={css} className='w-8 h-8' alt="" />
                            <span className='text-xs'>css</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={js} className='w-8 h-8' alt="" />
                            <span className='text-xs'>js</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={ts} className='w-8 h-8' alt="" />
                            <span className='text-xs'>ts</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={java} className='w-8 h-8' alt="" />
                            <span className='text-xs'>java</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={react} className='w-8 h-8' alt="" />
                            <span className='text-xs'>react</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={next} className='w-8 h-8' alt="" />
                            <span className='text-xs'>next</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={angular} className='w-8 h-8' alt="" />
                            <span className='text-xs'>angular</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={nest} className='w-8 h-8' alt="" />
                            <span className='text-xs'>nest</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={node} className='w-8 h-8' alt="" />
                            <span className='text-xs'>node</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={express} className='w-8 h-8' alt="" />
                            <span className='text-xs'>express</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={git} className='w-8 h-8' alt="" />
                            <span className='text-xs'>git</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={github} className='w-8 h-8' alt="" />
                            <span className='text-xs'>github</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={scss} className='w-8 h-8' alt="" />
                            <span className='text-xs'>sass</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={tailwindcss} className='w-8 h-8' alt="" />
                            <span className='text-xs'>tailwind</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={prisma} className='w-8 h-8' alt="" />
                            <span className='text-xs'>prisma</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={mysql} className='w-8 h-8' alt="" />
                            <span className='text-xs'>mysql</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={postgresql} className='w-8 h-8' alt="" />
                            <span className='text-xs'>postgres</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={postman} className='w-8 h-8' alt="" />
                            <span className='text-xs'>postman</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={springboot} className='w-8 h-8' alt="" />
                            <span className='text-xs'>springboot</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={jira} className='w-8 h-8' alt="" />
                            <span className='text-xs'>jira</span>
                        </div>
                        <div className='px-2 rounded py-2 flex flex-col items-center gap-2 bg-slate-300'>
                            <img src={figma} className='w-8 h-8' alt="" />
                            <span className='text-xs'>figma</span>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-[30%]'>
                    <p className="text-xs text-[#05A5FF]">Soft Skills</p>
                    <div className='flex flex-wrap gap-4 w-full'>
                        <p className='rounded px-2 py-1 bg-slate-200'>Team work</p>
                        <p className='rounded px-2 py-1 bg-slate-200'>Collaboration</p>
                        <p className='rounded px-2 py-1 bg-slate-200'>Problem solving</p>
                        <p className='rounded px-2 py-1 bg-slate-200'>Accountability</p>
                        <p className='rounded px-2 py-1 bg-slate-200'>Written and verbal communication</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-4'>
            <h3 className='text-3xl text-[#0C0C0C96]'>Education</h3>
            <p className="text-xs text-[#05A5FF]">Where I’ve Studied</p>
            <div className='w-full flex flex-wrap py-4 gap-8'>
                <div className='flex flex-col gap-2 min-w-[300px]'>
                    <div className='flex justify-between'>
                        <p className='text-xs text-gray-400'>2023-present</p>
                        <p className='text-xs text-gray-400'>GPA - 3.7/4.0</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xl font-bold'>BSC in Information Technology</h4>
                        <p className='text-sm'>Ghana Communication Technology University, Ghana</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 min-w-[300px]'>
                    <div className='flex justify-between'>
                        <p className='text-xs text-gray-400'>2019-2022</p>
                        <p className='text-xs text-gray-400'>GPA - 4.2/5.0</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xl font-bold'>HND in Computer Science</h4>
                        <p className='text-sm'>Koforidua Technical University, Ghana</p>
                    </div>
                </div>
            
                
            </div>
        </div>
        <div className='py-4'>
            <h3 className='text-3xl text-[#0C0C0C96]'>Experience</h3>
            <p className="text-xs text-[#05A5FF]">Where I’ve Worked</p>
            <div className='w-full flex flex-wrap py-4 gap-8'>
                <div className='flex flex-col gap-2 max-w-[400px]'>
                    <div className='flex justify-between'>
                        <p className='text-xs text-gray-400'>September 2022 - May 2023</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xl font-bold'>Software Engineer <span className='text-[#05A5FF]'>@ Turntabl</span></h4>
                        <p className='text-sm'>Collaborated with other engineers on internal projects to create new tools and systems for the organisation.</p>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Typescript</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Java</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Angular</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Spring Boot</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Postgresql</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Tailwind Css</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Figma</span>
                    </div>
                </div>
            
                <div className='flex flex-col gap-2  max-w-[400px]'>
                    <div className='flex justify-between'>
                        <p className='text-xs text-gray-400'>September 2021 - August 2022</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-xl font-bold'>IT Personnel <span className='text-[#05A5FF]'>@ CRIG</span></h4>
                        <p className='text-sm'>Design, develop and style high quality website and systems used internally by the organisation</p>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Javascript</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Php</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>HTML</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Scss</span>
                        <span className='px-2 py-1 rounded bg-[#aadaf798] text-[#05A5FF]'>Mysql</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About
