import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({onAddProject, onCancel}) {

    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modalRef = useRef()

    function handleSave(){
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
        
        //TODO: Add validation
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() ===''){
            // show error modal
            modalRef.current.open()
            return
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }


    return (
        <>
        <Modal ref={modalRef} onCloseLabel="Close">
          <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Data</h2>
          <p className='text-stone-400 mb-4'>You need to add some data before submit</p>
        </Modal>
        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li><button onClick={onCancel} className='text-stone-800 hover:text-stone-950'>Cancel</button></li>
                <li><button onClick={handleSave} className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title" type="text"/>
                <Input ref={description} label="Description"  isTextArea/>
                <Input ref={dueDate} label="Due Date" type="date"/>
            </div>
        </div>
        
        </>

    )
}