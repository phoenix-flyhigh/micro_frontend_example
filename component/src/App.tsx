import React, { useState } from 'react'
import CreateTask from './components/CreateTask';
import About from './components/About';

const App: React.FC = () => {
    const [showHomeComponent, setShowHomeComponent] = useState<boolean>(false);
    const [showAboutComponent, setShowAboutComponent] = useState<boolean>(false);

    return (
        <div
            className='flex flex-col justify-start items-center h-screen w-full bg-blue-200 text-xl'
        >
            <div className='flex gap-8 mt-40'>
                <button
                    className='bg-blue-700 text-white w-40 p-3 rounded-xl hover:bg-blue-600 cursor-pointer'
                    onClick={() => {
                        setShowAboutComponent(false)
                        setShowHomeComponent(prev => !prev)
                    }}
                >
                   {`${showHomeComponent ? "Hide" : "Show"} Home`}
                </button>
                <button
                    className='bg-blue-700 text-white w-40 p-3 rounded-xl hover:bg-blue-600 cursor-pointer'
                    onClick={() => {
                        setShowHomeComponent(false)
                        setShowAboutComponent(prev => !prev);
                    }}
                >
                    {`${showAboutComponent ? "Hide" : "Show"} About`}
                </button>
            </div>
            {
                showHomeComponent && <CreateTask />
            }
            {
                showAboutComponent && <About />
            }
        </div>
    )
}

export default App;