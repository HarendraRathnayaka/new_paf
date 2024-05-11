import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [ItemDelete, setItemToDelete] = useState("");
  console.log(ItemDelete);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(`http://localhost:8081/api/Workout`);
        const data = await res.json();
        console.log(data)

        if (res.ok) {
            setWorkouts(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchItems();
  }, []);




  const handleDeleteUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:8081/api/WorkoutDelete/${ItemDelete}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (res.ok) {
        setWorkouts((prev) => prev.filter((workout) => workout.id !== ItemDelete));
        alert("deleted")
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
 


 
 

  return (
    <div className="bg-[#f3f4f6] w-[1230px]">
    <div className="flex justify-center items-center">
      
    </div>
    
        

    <div className="flex justify-center mt-4">
      <div className="flex flex-wrap justify-center gap-8">
      <div className="max-h-[700px] w-full overflow-y-auto  scrollbar-none">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="w-[580px] h-md shadow-md bg-white mt-10 mb-5 border-none rounded-2xl "
          >
            <div className="px-6 py-4">
                <div className="flex justify-center items-center  bg-gradient-to-r from-blue-400 to-blue-500 border rounded-xl shadow-lg shadow-blue-200   font-serif ">
                <h2 className="font-extralight text-xl text-white mb-2 truncate">
                {workout.workoutState}
              </h2>

                </div>
              <div>
              <p className="font-semibold text-gray-700 ">Description</p>
              <p className="font-extralight text-gray-700 text-base  w-20px break-words">
                 {workout.description}
              </p>

              </div>
              <div>
                <p className="font-semibold text-gray-700">
                    Date
                </p>
              <p className="font-extralight text-gray-700 text-base">
           
             {moment(workout.date).format("YYYY-MM-DD")}
             {/* {workout.date} */}
              </p>

              </div>
             
             
              <div className="font-medium text-blue-900  bg-slate-50 shadow-xl h-10 ml-1 rounded-xl s  mt-4 mb-2">
             
                <div className=" flex justify-center text-xl b font-medium  items-center  mt-4 cursor-pointer">
              Workout
                </div>
               
            
              </div>
              <div>
              <div className="max-h-72 overflow-y-auto  scrollbar-none">
                {workout.state.map((state, index) => (
                  <div key={index} className="gap-2 bg-blue-500 bg-opacity-5 rounded-xl  ">
                    <div className="font-serif text-gray-800">
                   {state.name}
                    </div>
                    <div className="font-extralight text-gray-600">
                    Completed Time: {state.completed}
                    </div>
                    <div>

                    <div className="font-extralight text-gray-600">
                    Burned Calories: {state.burend_callary}
                   
                    </div>
                 </div>
                <hr  className="text-blue-600"/>

                  </div>
                ))}

                
                </div>
                <div className="flex justify-center mt-3 gap-10">
                     
                     <Link to={`/updateworkout/${workout.id}`}>
                     <button className="font-extralight  w-20 h-8 bg-gradient-to-r from-blue-400 to-blue-500  rounded-xl border shadow-lg shadow-slate-300 text-white hover:opacity-75">Edit</button>
                     </Link>
                   
                    <button  onClick={() => {
                      setItemToDelete(workout.id);
                      handleDeleteUser();
                    }} className="font-extralight  w-20 h-8 bg-gradient-to-r from-blue-400 to-blue-500  rounded-xl border shadow-lg shadow-slate-300 text-white hover:opacity-75">Delete</button>
                   

                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  </div>
  );
}

