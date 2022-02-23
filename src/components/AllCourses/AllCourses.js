import React, { useEffect, useState } from 'react';
import SingleCourses from '../SingleCourses/SingleCourses';
import './AllCourses.css'
const AllCourses = () => {
  const [courses,setCourses]=useState([])
  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  },[])
  return (
    <div className='allCards'>
       {
         courses.slice(4,17).map(course => <SingleCourses
         key={course.key}
         course={course}
         ></SingleCourses>)
       }
    </div>
    
  );
};

export default AllCourses;