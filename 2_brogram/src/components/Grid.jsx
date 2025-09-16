import React, { useState ,useEffect } from 'react'
import {workoutProgram as training_plan} from '../utils/index.js'
import WorkoutCard from './WorkoutCard.jsx'

export default function Grid(){
    const [savedworkouts, setsavedworkouts] = useState(null)
    const [selectedWorkout, setselectedWorkout] = useState(null)
    const completedWorkouts = Object.keys(savedworkouts || {}).filter((val)=>{
            const entry = savedworkouts[val]
            return entry.isComplete
        }
    )

    function handleSave(index,data){
        //save to local storage and modify the saved workout state
        const newObj = {
            ...savedworkouts,
            [index] : {
                ...data,
                isComplete: !!data.isComplete || !!savedworkouts?.[index]?.isComplete
            }         
        }
        setsavedworkouts(newObj)
        localStorage.setItem('brogram', JSON.stringify(newObj))
        setselectedWorkout(null)
    }
    // application-brogram localStorage

    function handleComplete(index,data){
        //complex a workout(modify the completed status)
        const newObj = { ...data }
        newObj.isComplete = true
        handleSave(index,newObj)
    }

    useEffect(()=>{
        if (!localStorage) { return }
        let savedData = {}
        if (localStorage.getItem('brogram')) {
            savedData = JSON.parse(localStorage.getItem('brogram'))
        }
        setsavedworkouts(savedData)
    },[])


    return (
        <div className = "training-grid-plan">
            {Object.keys(training_plan).map((workout,workoutIndex)=>{
                const islocked = workoutIndex == 0 ? false : !completedWorkouts.includes(`${workoutIndex-1}`)

                const type = workoutIndex % 3 === 0 ? 'Push' : (workoutIndex % 3 === 1 ? 'Pull' : 'Legs')
                const trainingPlan = training_plan[workoutIndex]
                const dayNum = ((workoutIndex / 8)<=1) ? '0' + (workoutIndex+1) : workoutIndex+1
                const icon = workoutIndex % 3 ==0 ? ( 
                            <i class="fa-solid fa-dumbbell"></i>
                            ): (
                                workoutIndex % 3 == 1?(
                                    <i class="fa-solid fa-weight-hanging"></i>
                                ) : (
                                    <i class="fa-solid fa-bolt"></i>
                                )
                            )
                
                if (workoutIndex == selectedWorkout){
                    return(
                        <WorkoutCard savedWeights={savedworkouts?.[workoutIndex]?.weights} handleComplete={handleComplete} handleSave={handleSave} key={workoutIndex} trainingPlan={trainingPlan} type={type} workoutIndex={workoutIndex} dayNum={dayNum} icon={icon}/>
                    )
                }


                return ( 
                    <button onClick={()=>{
                        if (islocked) { return }
                        setselectedWorkout(workoutIndex)
                    }} className= {'card plan-card ' + (islocked ? 'inactive' : '') } key={workoutIndex}>
                        <div className='plan-card-header'>
                        <p>Day{dayNum} </p>
                        {islocked ? (
                            <i class="fa-solid fa-lock"></i>
                        ):(icon)}
                        </div>

                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}