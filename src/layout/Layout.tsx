import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

interface PropTypes {
    children: any;
}

export default function Layout({children}: PropTypes): JSX.Element {
    return (
        <div className='w-full h-full flex flex-col overflow-hidden'  style={{backgroundImage: 'url("/assets/images/background.jpg")', backgroundSize: 'cover'}}>
            <div className='flex-grow-0 flex-shrink-0'>
                <Header></Header>
            </div>
            <div className='flex-grow flex-shrink overflow-auto'>
                <Outlet></Outlet>
                {
                    children
                }
            </div>
        </div>
    )
}