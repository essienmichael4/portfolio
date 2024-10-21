import ProjectContainer from '../ProjectContainer'
import bms from '../../assets/bms.png'
import rmbdeals from '../../assets/rmbdeals.png'
import virtual from '../../assets/virtual.png'

const Project = () => {
  return (
    <div id='projects' className='container px-4 lg:px-8 mx-auto my-8 py-8'>
        <h2 className='text-6xl text-[#0C0C0C96]'>PROJECTS</h2>
        <p className='text-xs text-[#05A5FF]'>Some things I’ve Built</p>
        <ProjectContainer title='RMB Deals' img={rmbdeals} purpose='Fullstack Project, 2024' description='A website to perform Ghana cedis to RMB transactions for Clixma Trading Enterprise.' stacks={["Typescript", "Express", "React", "Schadcn ui", "Tailwind CSS", "Type ORM", "MySQL"]} web="https://rmbdeals.com" />
        <ProjectContainer title='VirtualR' img={virtual} purpose='Frontend Project, 2024' description='Landing page design for a VR website' stacks={["Typescript", "React", "Tailwind CSS"]} github='https://www.github.com/essienmichael4/virtualr-lp' web='https://essienmichael4.github.io/virtualr-lp'/>
        <ProjectContainer title='BMS' img={bms} purpose='Personal School Project, 2023' description='For managing bank transactions and loans' stacks={["Typescript", "Express", "React", "Tailwind CSS", "Prisma", "Postgres"]} github="https://www.github.com/essienmichael4/bank-management-frontend" />
    </div>
  )
}

export default Project
