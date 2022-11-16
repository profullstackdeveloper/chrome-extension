import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props: any): JSX.Element {
    console.log(props);
    const [userInfo, setUserInfo] = React.useState<any>({});
    const [displayError, setDisplayError] = React.useState<boolean>(false);

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setDisplayError(false);
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }

    React.useEffect(() => {
        chrome.storage.sync.get(['navigate'], (items) => {
            console.log("get result is ", items);
        })
    }, [])

    const handleClick = () => {
        console.log(userInfo);
        if (userInfo.username === 'champion' && userInfo.password === 'mymember@123') {
            chrome.storage.sync.set({'navigate': 'true'}, () => {
                console.log("saved in storage!");
            })
            navigate('/tracking');
        } else {
            setDisplayError(true);
        }
    }

    return (
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className='text-3xl'>
                Login
            </div>
            <div className='flex flex-col my-4'>
                <input name="username" placeholder='User name' className='px-2 mb-5 py-1 border border-solid border-blue-400 outline-none' onChange={(e) => handleChange(e)}></input>
                <input name="password" type="password" placeholder='Passowrd' className='px-2 py-1 border border-solid border-blue-400 outline-none' onChange={(e) => handleChange(e)}></input>
            </div>
            <div className='w-full h-fit flex flex-col items-center'>
                <div className='px-4 py-2 w-fit bg-blue-500 rounded-md text-white' onClick={() => handleClick()}>
                    Login
                </div>
                <div className='relative w-full flex justify-center'>
                    {
                        displayError && <div className='text-red-600 text-lg absolute text-center'>
                            User name or password is incorrect.
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}