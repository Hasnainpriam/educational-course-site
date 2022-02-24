import React, { useEffect, useState } from 'react';
import useCourse from '../../hooks/useCourse';
import Course from '../Course/Course';
import './DisplayCourses.css'
const DisplayCourses = () => {
  const [courses]=useCourse()

  return (
    <>
   <p className="mt-4 text-6xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center ">Our Top Courses</p>
    <div className='card-container'>
      {
          courses.slice(0,4).map(course => <Course 
            key={course.key}
            course={course}
            ></Course>)
      }
    </div>
</>
  );
};

export default DisplayCourses;