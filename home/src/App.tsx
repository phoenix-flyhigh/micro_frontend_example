import React, { useState } from 'react'
import Header from './components/Header';
import SideBar from './components/SideBar';
// import Home from "remoteApp/Home"
// import About from "remoteApp/About"
import './styles.css'

const App: React.FC = () => {
    const [showHomeComponent, setShowHomeComponent] = useState<boolean>(false);
    const [showAboutComponent, setShowAboutComponent] = useState<boolean>(false);

    const handleHomeBtnClick = () => {
        setShowAboutComponent(false)
        setShowHomeComponent(prev => !prev)
    }
    const handleAboutBtnClick = () => {
        setShowHomeComponent(false)
        setShowAboutComponent(prev => !prev);
    }

    return (
        <div
            className='homepage'
        >
            <Header />
            <div className='content'>
                <SideBar
                    btn1Click={handleHomeBtnClick}
                    btn2Click={handleAboutBtnClick}
                />
                {/* {
                    showHomeComponent && <Home />
                }
                {
                    showAboutComponent && <About />
                } */}
            </div>
        </div>
    )
}

export default App;