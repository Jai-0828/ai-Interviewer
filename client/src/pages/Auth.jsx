import React from 'react'
import { SiAseprite } from "react-icons/si";
import { VscSparkle } from "react-icons/vsc";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../utils/firebase';
import { signInWithPopup } from "firebase/auth";     
import{ ServerUrl } from "../App";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from "../redux/userSlice";


function Auth({isModel= false}) {
  const dispatch = useDispatch()

  const handleGoogleAuth = async() => {
    try {
      const response = await signInWithPopup(auth, provider);
      let User = response.user
      let name = User.displayName
      let email = User.email
      const result = await axios.post(ServerUrl + "/api/auth/google" ,
        {name , email}, {withCredentials: true})
        dispatch(setUserData(result.data))
    
      }catch (error) {
        console.log("Error signing in with Google:", error);
         dispatch(setUserData(null))
      }
    }
  return (
    <div className ={`
      w-full
      ${isModel ? "py-4" : "min-h-screen flex flex-col justify-center items-center px-6 py-20"}
      `}>
      <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.55 }}
      className={`
        w-full
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-4xl"}
        bg-white shadow-2xl border border-gray-200
        `}>
        <div className=" flex mb-6 item-center justify-center">          
        <div className="bg-zinc-950 text-zinc-50 dark:bg-white dark:text-zinc-950"> 
          <SiAseprite  size={40} />

        </div>
        <h2 className="text-2xl font-bold">Interview</h2>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold text-center leading-snug mb-6">
        continue with{" "}
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full inline-flex items-center gap-2">
          <VscSparkle size={16} />
          AI Smart Interviewer
           </span>
           </h1>  
           <p className="text-gray-600 text-center mb-6 text-sm">
            Practice interviews with AI and improve your performance.
            Get instant feedback and personalized tips to ace your upcoming interview.
           </p>
            <motion.button
            onClick={handleGoogleAuth}
            whileHover={{ opacity: 0.7, scale: 1.03 }}
            whileTap={{ opacity: 1, scale: 0.97 }}
            className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white font-semibold px-4 rounded-full">
            <FcGoogle size={16} /> Continue with Google
            </motion.button>
          </motion.div>
        </div>
      );
    }
export default Auth
