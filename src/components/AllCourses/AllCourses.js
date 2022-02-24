import React, { useEffect, useState } from 'react';
import useCourse from '../../hooks/useCourse';
import SingleCourses from '../SingleCourses/SingleCourses';
import './AllCourses.css'
const AllCourses = () => {
  const [courses]= useCourse()
  return (
    <> <h1 className="text-4xl mt-6 text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
     <span className='text-indigo-600'>All Courses</span><br />
  </h1>
    <div className='allCards'>
     
       {
         courses.slice(4,17).map(course => <SingleCourses
         key={course.key}
         course={course}
         ></SingleCourses>)
       }
    </div>
    </>
  );
};

export default AllCourses;