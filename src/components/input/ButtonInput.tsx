import React from 'react';

interface PropTypes extends React.HTMLAttributes<unknown> {
    placeholder?: string;
    buttonStyle?: React.CSSProperties;
    className?: string;
    handler?: Function;
    start: boolean;
}

export default function ButtonInput({placeholder, start, buttonStyle, handler, ...rest}: PropTypes): JSX.Element {

    const handleClick = () => {
        if(handler) {
            handler();
        }
    }

    return (
        <div className='w-full h-fit flex flex-col items-end relative'>
            <input id='workingon' placeholder={placeholder} onChange={(e) => rest.onChange && rest.onChange(e)} className='pl-2 pr-32 py-3 h-14 text-2xl outline-none w-full border border-solid border-gray-400'></input>
            <div style={buttonStyle} className='w-28 h-12 flex items-center justify-center absolute  bg-blue-600 m-1 cursor-pointer' onClick={() => handleClick()}>
                <span className='w-fit px-8 uppercase text-white'>
                    {
                        start ? 'stop' : 'start'
                    }
                </span>
            </div>
        </div>
    )
}