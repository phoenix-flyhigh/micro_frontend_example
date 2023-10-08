import React from 'react'

interface SideBarProps {
    btn1Click: () => void;
    btn2Click: () => void;
}

const SideBar = ({
    btn1Click,
    btn2Click
}: SideBarProps) => {
    return (
        <div className='sidebar'>
            <button
                onClick={btn1Click}
                className='menu_button'
            >
                Home
            </button>
            <button
                onClick={btn2Click}
                className='menu_button'
            >
                About
            </button>
        </div>
    )
}

export default SideBar