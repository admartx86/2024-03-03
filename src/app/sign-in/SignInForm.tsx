'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

type FormState = {
    username: string;
    password: string;
};

type ErrorState = {
    usernameError: boolean;
    passwordError: boolean;
};

export default function SignInForm() {
    
    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
    })

    const [errors, setErrors] = useState<ErrorState>({
        usernameError: true,
        passwordError: true,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(form.username + ' ' + form.password);
        setForm({
            username: '',
            password: '',
        });
        setErrors({
            usernameError: true,
            passwordError: true,
        });
    };

        useEffect(() => {
            setErrors({
                usernameError: form.username === '',
                passwordError: form.password === '',
            })
        }, [form])

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input className='border-black border-2' id='username' type='text' value={form.username} onChange={handleChange}></input>
                {errors.usernameError ? 
                    <span className='text-gray-300'>Enter your username. </span>
                : 
                    <span>Enter your username. <span className='text-green-500'>✔️</span></span>
                }
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input className='border-black border-2' id='password' type='password' value={form.password} onChange={handleChange}></input>
                {errors.passwordError ?
                    <span className='text-gray-300'>Enter your password. </span>
                :
                    <span>Enter your password. <span className='text-green-500'>✔️</span></span>
                }
            </div>
            {errors.usernameError || errors.passwordError ? 
            <button className='border-black border-2 bg-gray-300' type='submit' disabled={true}>
                Submit
            </button>
            :
            <button className='border-black border-2' type='submit'>
                Submit
            </button>
            }
        </form>
    );
};

