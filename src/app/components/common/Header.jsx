// components/Header.js
"use client"
import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {


   const socialIcons = [
    { icon: <InstagramIcon />, href: "https://instagram.com", hoverColor: "hover:text-pink-500" },
    { icon: <FacebookIcon />, href: "https://facebook.com", hoverColor: "hover:text-blue-600" },
    { icon: <YouTubeIcon />, href: "https://youtube.com", hoverColor: "hover:text-red-600" },
    { icon: <WhatsAppIcon />, href: "https://whatsapp.com", hoverColor: "hover:text-green-500" },
  ];
  
 
  return (
    <>
      <div className="bg-gray-800 py-2 hidden xl:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center justify-between gap-2">
<LocationOnIcon className='icons'/>
                <small className='font-bold text-gray-100'>Location</small>
                <span className=' text-gray-400'>61W Business Str Hobert, LA</span>
            </div>
            <div className="flex items-center justify-between gap-2">
            <EmailIcon  className='icons'/>
                <small className='font-bold text-gray-100'>Email</small>
                <a href="mailto:sendmail@creote.com" className='text-gray-400'>sendmail@creote.com</a>
            </div>
          </div>
          <div className="right_side flex space-x-6">
            <div className="flex items-center justify-between gap-2">
        <PhoneInTalkIcon  className='icons'/>
                <small  className='font-bold text-gray-100'>Phone</small>
                <a href="tel:+9806071234" className='text-gray-400'>+9806071234</a>
            </div>
            <div className="flex items-center justify-between gap-2">
         <ShareIcon  className='icons'/>
              <small  className='font-bold text-gray-100'>Share</small>
              {socialIcons.map((platform, index) => (
                <a key={index} href={platform?.href} target="_blank" rel="nofollow"
                  className={`text-gray-400 ${platform?.hoverColor}`}
                >
                  {platform?.icon}
                </a>
              ))}

               
            </div>
          </div>
        </div>
      </div>

<Navbar/>         

       </>
  );
};

export default Header;
