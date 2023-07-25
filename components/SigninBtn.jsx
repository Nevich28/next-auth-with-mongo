'use client';

import Image from 'next/image';
import logo from '@/public/google.png';
import { signIn } from 'next-auth/react';

export default function SigninBtn() {
    return (
        <button
            onClick={() => signIn('google')}
            className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
            <Image src={logo} height={30} width={30} alt="google" />
            <span className="bg-blue-500 text-white px-4 py-3">
                Sign in with Google
            </span>
        </button>
    );
}
