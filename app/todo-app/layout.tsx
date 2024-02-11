'use client'
import React from 'react'
import useAuth from '../lib/hooks/useAuth';
import SignInComponent from './@signin/page';

const ToDoAppLayoutComponent = ({ children } : 
    { children: React.ReactElement }) => {

    const isAuthenticated = useAuth();

    return isAuthenticated ? (<div>{children}</div>)
        : <SignInComponent />
}

export default ToDoAppLayoutComponent