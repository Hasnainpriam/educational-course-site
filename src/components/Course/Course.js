import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
  const {img,course_name,description,price,rating,course_time}=props.course
  return (
    <div>
       <div class="flex justify-center h-full">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={img} alt="" />
    <div class="p-6 flex flex-col justify-start ">
      <h5 class="text-gray-900 text-xl font-medium mb-2 ">Course : {course_name}</h5>
      <p class="text-gray-700 text-base mb-4 h-full ">
{description}      </p>
      <p class="text-gray-700 text-base mb-4 " >
Duration : {course_time}      </p>
      <p class="text-gray-600 text-xs">Price : {price}</p>
      <p class="text-gray-600 text-xs">Rating : {rating}</p><br />
      <Link to='/courses'><button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Show All Courses</button></Link> 
    </div>
  </div>
</div>
    </div>
  );
};

export default Course;