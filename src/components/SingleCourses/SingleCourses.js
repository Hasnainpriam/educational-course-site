import React from 'react';

const SingleCourses = (props) => {
  const {img,course_name,description,price,rating,course_time,instructor,Category,level}=props.course
   
  return (
    <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={img} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{course_name}</h5>
      <p class="text-gray-700 text-base mb-4">
       {description.slice(0,120)}
      </p>
      <p class="text-gray-700 text-base mb-2 font-medium">
      Instructor : {instructor}
      </p>
      <p class="text-gray-700 text-base mb-2 font-medium">
      Duration : {course_time}
      </p>
      <p class="text-gray-700 text-base mb-2 font-medium">
      Level : {level}
      </p>
      <p class="text-gray-700 text-base mb-2 font-medium">
      Price : {price}
      </p>
      <p class="text-gray-700 text-base mb-4 font-medium">
       Rating : {rating}
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>

  );
};

export default SingleCourses;