import Link from 'next/link';

export default function SignIn() {
    return(
        <div>
            <Link href='/'>Home</Link>
            <Link href='/sign-in'>Sign In</Link>
            <h1>Sign In</h1>
            New User? <Link href='/register'>Make an account.</Link>
        </div>
    );
};