import {useState, useEffect, FC} from 'react';


export const Login: FC = () => {
    return (
        <div className='flex place-content-center bg-gray-200 border border-gray-400 p-2'>
            <form >
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        
    )
}