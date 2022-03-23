import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Nav.css"

const Nav = () => {
    const[show, handleShow] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleShow(true);
            }else{
                handleShow(false)
            }
        });
        return()=>{
            window.removeEventListener("scroll")
        };

    },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
         src="https://www.citypng.com/public/uploads/small/11594682142zfvmyyi7wtpxqdggweilgak0d0ys35ktrf9ssm6jyafxrmn3ipwkvghhm2ilbx4sckpnlditunervtidvw2xlww1hcpbrmi40hhs.png" alt="Netflix Logo" />
       

        <img className='nav__avatar'
         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo" />

         

    </div>
  )
}

export default Nav