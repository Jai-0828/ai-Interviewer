import React from 'react'
import {useSelector} from 'react-redux'
import { motion } from "motion/react"
import { TbLayoutNavbarFilled } from "react-icons/tb";
import { BsCoin } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";
import axios from 'axios';
import {ServerUrl} from '../App'
import {setUserData} from '../redux/userSlice';
import {useDispatch} from "react-redux";
import AuthModel from "./AuthModel";


function Navbar() {
   
   
    const {userData}  = useSelector((state) => state.user)
    const[ShowCreditsPopup, setShowCreditsPopup] 
    = useState(false)
    const[ShowUserProfilePopup, setShowUserProfilePopup] = useState(false)
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const [showAuth, setShowAuth] = useState(false)



    const handleLogout= async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" ,
                {withCredentials:true})
                dispatch(setUserData(null))
                setShowCreditPopup(false)
                setshowUserPopup(false)
                navigate("/")
        } catch (error) {
            console.log(error)
        }
        
    }


    return (
   <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55 }}
    className="w-full max-w-6xl bg-white rounded-3xl shadow-sm border border-gray-200  px-4 py-4 flex justify-between items-center">
        <div className= 'flex items-center gap-2 cursor-pointer'>
            <div className="bg-black text-white p-2 rounded-full">
                <TbLayoutNavbarFilled size={24} />
            </div>
            <h1 className="text-3xl font-bold
             text-blue-400">AI Interviewer</h1>
        </div>

        <div className="flex items-center gap-6 relative">
          <div className="relative">
            <button onClick={() =>{ 
              if(!userData){

                setShowAuth(true)
                return;
              }
              setShowCreditsPopup 
            (!ShowCreditsPopup);
            setShowUserProfilePopup(false)
        }} className="flex items-center gap-2
            bg-gray-200 px-4 py-2
             rounded-full text-md hover:bg-gray-200 transition">
               <BsCoin size={20} />
               {userData?.credits || 0}
               </button> 
               {ShowCreditsPopup && (
                 <div className="absolute -right-12.5 mt-3 w-62 bg-white shadow-xl border border-gray-200 rounded-xl px-4 py-2 text-sm">
                   <p className="text-sm text-gray-600 mb-3 ">Need more credits to continue?</p>
                   <button onClick={() => navigate('/pricing')} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                     Buy Credits
                   </button>
                 </div>
               )}
             </div> 


             <div className="relative">
            <button onClick={() => {
              if(!userData){

                setShowAuth(true)
                return;
              }
              setShowUserProfilePopup(!ShowUserProfilePopup);
                setShowCreditsPopup(false);
            }} className="w-9 h-9 bg-black text-white rounded-full
             flex items-center justify-center font-semibold">
               {userData ? userData?.name?.slice(0, 1).toUpperCase()
                : <FaUserAstronaut size={16} />}
               </button> 
               {ShowUserProfilePopup && (
                 <div className="absolute -right-12.5 mt-3 w-62 bg-white shadow-xl border border-gray-200 rounded-xl px-4 py-2 text-sm">
                   <p className='text-sm text-gray-600  font-medium mb-3 '>{userData?.name || 'User'}</p>
                   <button onClick={() => navigate('/history')} className="w-full text-left left text-sm  py-2 flex items-center gap-2 hover:text-black text-gray-600">
                     View History
                   </button>
                     <button onClick={handleLogout} className="w-full text-left text-sm py-2 flex items-center gap-2 text-red-500">
                      <HiOutlineLogout size={16} />
                       Logout
                     </button>
                 </div>
               )}
             </div> 
        </div>

  </motion.div>
  {showAuth && <AuthModel onClose = {()=>setShowAuth(false)}/>}
</div>
  )
}

export default Navbar
