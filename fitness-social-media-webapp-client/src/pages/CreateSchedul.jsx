import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserDash2 from '../components/UserDash2';

export default function CreateSchedul() {
  const [formData, setFormData] = useState({
    workoutState: '',
    description: '',
    date: '',
    state: [],
  });

  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value.trim() });
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedState = [...formData.state];
    updatedState[index][field] = value.trim();
    setFormData({ ...formData, state: updatedState });
  };

  const handleDateChange = (e) => {
    const date = e.target.value.trim(); // Remove leading/trailing spaces
    setFormData({ ...formData, date: date });
  };

  const handleAddExercise = () => {
    setFormData({
      ...formData,
      state: [
        ...formData.state,
        { name: '', completed: '', burend_callary: '' },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8081/api/CreateWorkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message || 'Failed to create workout');
        return;
      }

      setPublishError(null);
      navigate(``);
      alert('Workout created successfully');
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  // Define options for each workout state
  const workoutOptions = {
    Arms: [
      'Bicep Curls',
      'Tricep Dips',
      'Hammer Curls',
      'Tricep Kickbacks',
      'Shoulder Press',
      'Lateral Raises',
      'Chin-ups/Pull-ups',
      'Barbell Curls',
      'Skull Crushers',
      'Cable Rows',
    ],
    Legs: [
      'Squats',
      'Lunges',
      'Deadlifts',
      'Leg Press',
      'Calf Raises',
      'Leg Extensions',
      'Leg Curls',
      'Bulgarian Split Squats',
      'Box Jumps',
      'Step-ups',
    ],
    Cardio: [
      'Running',
      'Jumping Jacks',
      'Burpees',
      'High Knees',
      'Jump Rope',
      'Stair Climbing',
      'Cycling',
      'Mountain Climbers',
      'Rowing Machine',
      'Swimming',
    ],
    Cycling: [
      'Cycling Sprints',
      'Hill Climbs',
      'Interval Training',
      'Pedaling Drills',
      'Endurance Rides',
      'Time Trials',
      'Spin Class Routines',
      'Power Intervals',
      'Recovery Rides',
      'Group Cycling Workouts',
    ],
    Yoga: [
      'Downward Dog',
      'Warrior Poses',
      'Tree Pose',
      "Child's Pose",
      'Cobra Pose',
      'Cat-Cow Stretch',
      'Sun Salutations',
      'Triangle Pose',
      'Bridge Pose',
      'Pigeon Pose',
    ],
  };

  return (
    <div className="flex">
      <UserDash2 />
      <div className="min-h-screen flex justify-center items-center bg-[#f3f4f6] pr-20 pl-20 container">
        <div>
          {/* <h1 className="text-4xl font-serif text-slate-500 whitespace-nowrap py-2 rounded-lg underline border-non">
          My Workout
        </h1> */}

          {/* <Link to="/">
          <button className="bg-gradient-to-r from-blue-400 to-blue-500 shadow-slate-400 w-32 h-10 border border-slate-300 shadow-xl rounded-lg text-white hover:opacity-85 ml-[800px] font-extralight text-opacity-75">
            My Workout
          </button>
        </Link> */}
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="w-[550px] h-[600px] shadow-slate-400 border bg-white rounded-lg shadow-xl">
            <div className="flex justify-center items-center mt-6">
              <form
                className="flex flex-col gap-4 items-left"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <h3 className="font-semibold text-black ml-1">Workout</h3>
                  <select
                    className="bg-slate-100 p-3 rounded-lg w-[200px] h-14"
                    id="workoutState"
                    onChange={handleChange}
                    required
                  >
                    <option className="font-serif text-black" value="">
                      Select
                    </option>
                    <option value="Legs">Legs</option>
                    <option value="Arms">Arms</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Yoga">Yoga</option>
                  </select>
                </div>

                <div>
                  <h3 className="font-semibold text-black ml-1 ">Date</h3>
                  <input
                    className="bg-slate-100 p-3 rounded-lg w-[460px] h-11"
                    type="date"
                    placeholder=""
                    id="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    onChange={handleDateChange}
                  />
                  {/* {Error && (
                  <p className="mt-5 text-red-800 font-serif text-opacity-50 w-300 h-7 rounded-lg text-center ">
                    {Error}
                  </p>
                )} */}
                </div>
                <div>
                  <h3 className="font-semibold text-black ml-1 ">
                    Description
                  </h3>
                  <textarea
                    className="bg-slate-100 p-3 rounded-lg w-[460px] h-20"
                    type="text"
                    placeholder=""
                    id="description"
                    required
                    // maxLength={80}
                    onChange={handleChange}
                  />
                </div>

                <div className="max-h-36 overflow-y-auto scrollbar-none">
                  {formData.state.map((exercise, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-600 ml-1">
                        Exercise {index + 1}
                      </h3>
                      <div className="flex gap-4 mt-4">
                        {formData.workoutState && (
                          <div>
                            <select
                              className="bg-slate-100 p-3 rounded-lg w-[180px] h-12"
                              value={exercise.name}
                              onChange={(e) =>
                                handleExerciseChange(
                                  index,
                                  'name',
                                  e.target.value
                                )
                              }
                            >
                              <option value="">Select Exercise</option>
                              {workoutOptions[formData.workoutState].map(
                                (exerciseOption) => (
                                  <option
                                    key={exerciseOption}
                                    value={exerciseOption}
                                  >
                                    {exerciseOption}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        )}
                        <input
                          className="bg-slate-100 p-3 rounded-lg w-[130px] h-12"
                          type="number"
                          min="0"
                          max="20"
                          value={exercise.completed}
                          placeholder="Time in min"
                          onChange={(e) => {
                            const inputValue = e.target.value.slice(0, 2);
                            handleExerciseChange(
                              index,
                              'completed',
                              inputValue
                            );
                          }}
                        />
                        <input
                          className="bg-slate-100 p-3 rounded-lg w-[110px] h-12"
                          type="number"
                          min="0"
                          value={exercise.burend_callary}
                          placeholder="Calories"
                          onChange={(e) => {
                            const inputValue = e.target.value.slice(0, 2);
                            handleExerciseChange(
                              index,
                              'burend_callary',
                              inputValue
                            );
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="bg-gradient-to-r from-blue-400 to-blue-500 border border-slate-300 shadow-xl shadow-slate-400 text-white p-3 rounded-lg w-[460px] h-11 font-serif text-opacity-90 hover:opacity-90"
                  type="button"
                  onClick={handleAddExercise}
                >
                  Add Exercise
                </button>
                <button
                  className="bg-gradient-to-r from-blue-400 to-blue-500 text-white border border-slate-300 shadow-xl shadow-slate-400 font-serif text-opacity-90 p-3 rounded-lg w-[460px] h-11 hover:opacity-90"
                  type="submit"
                >
                  Submit
                </button>

                {publishError && (
                  <p className="mt-5 text-red-800 font-serif text-opacity-50 w-300 h-7 rounded-lg text-center ">
                    {publishError}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
