import React from 'react';
import './Navbar.css';

export default function Navbar(){
    return(
        <>
           <header>
               <div className='logo'>
                Instagram

               </div>
               <div className='SearchBar'>
                <input placeholder='search...' />

               </div>
               <div className='menu'>

               </div>
           </header>
        </>
    );
}
