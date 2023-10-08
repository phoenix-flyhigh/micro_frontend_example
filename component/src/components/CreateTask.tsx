import React from 'react'

const CreateTask = () => {
    return (
        <div
            className=''
        >
            <form
                className='flex flex-col gap-1'
            >
                <div className='flex flex-col'>
                    <label>Input 1</label>
                    <input
                        name="input 1"
                        value=""
                        className='w-40 my-2'
                    />
                </div>
                <div className='flex flex-col'>
                    <label>Input 2</label>
                    <input
                        name="input 1"
                        value=""
                        className='w-40 my-2'
                    />
                </div>
            </form>
        </div>
    )
}

export default CreateTask