import React from "react";

function Navbar() {
    return (
        <div className="nav flex ml-6 p-6 bg-amber-300 w-[95%] h-8 rounded-lg justify-center items-center " >
            <h4 className='ml-4'>Home</h4>
            <h4 className='ml-4'>Services</h4>
            <h4 className='ml-4'>Courses</h4>
            <h4 className='ml-4'>Bootcamp</h4>
            <h4 className='ml-4'>About</h4>
        </div>
    );
}

export default Navbar;