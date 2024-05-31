import ProjectContainer from '../ProjectContainer'
import bms from '../../assets/bms.png'

const Project = () => {
  return (
    <div id='projects' className='container px-4 lg:px-8 mx-auto my-8 py-8'>
        <h2 className='text-6xl'>PROJECTS</h2>
        <p className='text-xs'>Some things I’ve Built</p>
        <ProjectContainer title='BMS' img={bms} purpose='Personal School Project, 2023' description='For managing bank .transactions and loans'/>
        
    </div>
  )
}

export default Project
