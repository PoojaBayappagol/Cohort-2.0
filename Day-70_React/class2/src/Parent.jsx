import React from 'react'
import App from './App.jsx'
import Test from './Test.jsx'

const Parent = () => {
    return (
        <div className="parent h-dvh w-full pt-6 bg-[url('https://images.unsplash.com/photo-1508550808328-72970a7007db?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        
            <Test />
        </div>
    )
}

export default Parent