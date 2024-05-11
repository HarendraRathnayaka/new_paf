// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import img from "../img/Capture.png";

export default function Header() {

  return (
    <div className="bg-white">
       
      <div className=" flex justify-between items-center p-5">
      <Link to="/">
          <h1 className=" m  ">
            <img src={img} alt="" className="rounded-xl  ml-10" /></h1>
        </Link>

        <div className="flex justify-center items-center gap-2 ml-96">
          <input type="text" placeholder="  Serach...." name="" id="" className="w-[400px] h-12   rounded-3xl  ml-10 bg-slate-50 border" />
          <button className="font-extralight  w-20 h-8 bg-gradient-to-r from-blue-400 to-blue-500  rounded-xl border shadow-lg shadow-slate-300 text-white hover:opacity-75">Serach</button>
        </div>
        <ul className="flex gap-4">
          
          <Link to={""}>
          <div className='flex gap-3   '>
        <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg"  alt=""  className='w-10 h-10 object-cover ml-48 mt-2 rounded-full'/>
       
            <div>
                <h1 className='text-gray-700 font-medium mt-2'>Jems123</h1>
            <h1 className='text-slate-600 font-medium text-sm'>Jems@gmail.com</h1> 
            </div>


        </div>
               </Link>
         

           
            
        
        </ul>
      </div>
    </div>
  );
}