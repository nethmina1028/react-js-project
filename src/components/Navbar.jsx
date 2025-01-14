import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = ()=> {

   const[isMenuOpen,setIsMenuOpen] =useState(false);
   const[isSticky,setIsSticky]=useState(false);

  //set toggle menu

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }


   useEffect(()=>{
    const handelScroll=()=>{
        if(window.scrollY>100){
            setIsSticky(true);
        }
        else{
            setIsSticky(false);
        }

    };
    window.addEventListener('scroll',handelScroll);

    return()=>{
    window.removeEventListener('scroll',handelScroll);
    }
      });
   
      const navItems = [
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonial",path:"testimonial"},
        {link:"FAQ",path:"faq"},
      ];

  return (
    <header className='w-full bg-white md: bg-transparent fixed top-0 left-0 right-0'>
     
      <nav> 
       
        <div>
          <a href="#" className='text-2xl font-semibold flex items-center space-x-3'><img src={logo} 
          alt="" className='w-10 inline-block items-center'/><span className='text-[#263238]'>NEXCENT</span></a>
       
         {/* nev items for large devices*/}

          <ul className='md:flex space-x-12 hidden'>
                  
                  {
                    navItems.map(({Link,path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className="block text-base text-gray-900 hover:text-brandPrimary " >{Link}</Link>)
                      
                  }

          </ul>


        </div>
          
      </nav>
    
    </header>
  )
}

export default Navbar