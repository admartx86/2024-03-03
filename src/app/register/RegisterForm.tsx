'use client'

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

type FormState = {
    username: string;
    password: string;
    confirmPassword: string;
};

type ErrorState = {
    usernameError: boolean;
    passwordError: boolean;
    confirmPasswordError: boolean;
};

export default function RegisterForm() {
    

    const [form, setForm] = useState<FormState>({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState<ErrorState>({
        usernameError: true,
        passwordError: true,
        confirmPasswordError: true,
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
            confirmPassword: '',
        });
        setErrors({
            usernameError: true,
            passwordError: true,
            confirmPasswordError: true,
        });
    };

    useEffect(() => {
        setErrors({
            usernameError: form.username === '',
            passwordError: form.password === '',
            confirmPasswordError: form.confirmPassword === '' || form.confirmPassword !== form.password, 
        });
    }, [form]);

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username</label>
                <input className='border-black border-2' id='username' type='text' value={form.username} onChange={handleChange}></input>
                {errors.usernameError ?
                    <span className='text-gray-300'>Make a username. </span>
                :
                    <span>Make a username. <span className='text-green-500'>✔️</span></span>
                }
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input className='border-black border-2' id='password' type='password' value={form.password} onChange={handleChange}></input>
                {errors.passwordError ?
                    <span className='text-gray-300'>Make a password. </span>
                :
                    <span>Make a password. <span className='text-green-500'>✔️</span></span>
                }
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input className='border-black border-2' id='confirmPassword' type='password' value={form.confirmPassword} onChange={handleChange}></input>
                {errors.confirmPasswordError ?
                    <span className='text-gray-300'>Confirm your password. </span>
                :
                    <span>Confirm your password. <span className='text-green-500'>✔️</span></span>
                }
            </div>
            {Object.values(errors).some(error => error) ?
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