import ProjectContainer from '../ProjectContainer'

const Project = () => {
  return (
    <div className='container px-4 lg:px-8 mx-auto my-8 py-8'>
        <h2 className='text-6xl'>PROJECTS</h2>
        <p className='text-xs'>Some things I’ve Built</p>
        <ProjectContainer title='BMS' purpose='Personal School Project, 2023' description='For managing bank .transactions and loans'/>
        
    </div>
  )
}

export default Project
