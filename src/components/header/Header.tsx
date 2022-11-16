import React from 'react';

export default function Header (): JSX.Element {
    const userName = "user@mymember.com";
    const avatarUrl = ''
    return (
        <div className='w-full h-20 flex justify-between items-center p-4 backdrop-blur-sm'>
            <img src='/assets/images/logo.png' className='w-28 h-14'></img>
            <div className='flex flex-col items-end'>
                <div className='rounded-full w-8 h-8 relative overflow-hidden'>
                    <img src={avatarUrl ? avatarUrl : '/assets/images/avatar.png'} className="absolute object-cover w-full h-full"></img>
                </div>
                <div>
                    {
                        userName
                    }
                </div>
            </div>
        </div>
    )
}