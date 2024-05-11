// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

export default function UserDash() {
  return (
    <div className='w-72 h-[200px] bg-white rounded-xl'>
        <div className='bg-gradient-to-r from-blue-400 to-blue-500 rounded-e-lg h-14'> 
        <div className='flex gap-3 ml-4  '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-white font-medium mt-2'> Nirash123</h1>
            <h1 className='text-slate-50 font-medium text-sm'>Nirash@gmail.com</h1> 
            </div>


        </div>

        </div>


        <Link to="/">
        <div className='mt-8 text-xl flex  gap-4   cursor-pointer hover:bg-gradient-to-r from-blue-400 to-blue-500 h-10 rounded-lg hover:shadow-lg '>
            
           <img className='w-5 h-5  mt-2 ml-8 hover:bg-white '  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNE1hNQtUT_4xppH3v0PKdnkK5GJv-SJwejHvrkBzqg&s" alt="" />
           <h1 className='mt-1 font-medium text-gray-800  hover:text-white '>View All Schedules</h1>
          
        </div>
        </Link>
        

        <div className='mt-10'>
            <div>

            </div>
           
            <div className='ml-4 text-slate-700 text-lg font-medium mt-3 '>Current User</div>
         
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-aGpatw32H3vwj6ZVhJew0zFKD-R1UlzL-N1AUu2kQ&s"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Nrish123</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>

        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://www.slazzer.com/blog/wp-content/uploads/2022/11/Professional-Profile-Picture-005.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Laksashan13</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://img.freepik.com/free-photo/crazy-man-funny-expression_1194-3133.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> jems33</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5B6V0mxFbSf25cnxc5QntGStilTtjimuC0N_OnfaHTQ&s"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Rayan553</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://img.freepik.com/premium-photo/profile-picture-happy-young-caucasian-man-spectacles-show-confidence-leadership-headshot-portrait-smiling-millennial-male-glasses-posing-indoors-home-employment-success-concept_774935-1446.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> Sanaramm12</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://images.theconversation.com/files/314111/original/file-20200207-43095-1kj7lht.jpg?ixlib=rb-4.1.0&rect=0%2C109%2C4331%2C3051&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'> lakshaa4443</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        <div className='flex gap-3 ml-4 mt-2  '>
        <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2018/10/mike-fox-467499-unsplash.jpg"  alt=""  className='w-10 h-10 object-cover mt-2 rounded-full'/>
            <div>
                <h1 className='text-gray-700 font-medium mt-2'>Sameeral443</h1>
            <h1 className='text-green-700 font-medium text-sm text-[10px]' >Active</h1> 
            </div>


        </div>
        

        </div>
        
    </div>
  )
}


