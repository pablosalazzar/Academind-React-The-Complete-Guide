import Button from './Button'


export default function ProjectSidebar({onAddProject,projects, onSelectProject,selectedId}){    
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Project</h2>
            <div>
                <Button onClick={onAddProject}>+ Add projectt</Button>
            </div>
            <ul className='mt-8'>
                {projects.map( currentProject => {
                    let style = 'w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800'
                    if(currentProject.id === selectedId){
                        style+=' bg-stone-800 text-stone-200'
                    }else{
                        style+=' text-stone-400'
                    }

                    return(
                        <li key={currentProject.id}>
                      <button onClick={()=> onSelectProject(currentProject.id)} className={style}>
                        {currentProject.title}
                      </button>
                    </li>
                    )

                    
                })}
            </ul>
        </aside>
    )
}