'use client';

import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import { signIn, signOut } from 'next-auth/react';

export default function NavBar() {
    const { status } = useSession();
    const authStatus = status === 'authenticated';
    // console.log(authStatus);
    return (
        <div className="p-4 flex justify-between items-center shadow-md">
            <Link
                className="font-bold text-lg text-blue-700"
                href="/">
                GTCoding
            </Link>
            {authStatus ? (
                <button
                    onClick={() => signOut()}
                    className="bg-slate-900 text-white px-6 py-2 rounded-md">
                    Sign Out
                </button>
            ) : (
                <button
                    onClick={() => signIn('google')}
                    className="bg-slate-900 text-white px-6 py-2 rounded-md">
                    Sign In
                </button>
            )}
        </div>
    );
}
