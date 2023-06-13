import React, { useEffect, useState } from 'react';
import PopularClassesCard from '../../PopularClassesCard/PopularClassesCard';
import axios from 'axios';
import Spinner from '../../Spinner/Spinner';
import ClassCard from '../../../Pages/ClassesListPage/ClassCard';
 

const PopularClassesComponent = () => {
    const [loading, setLoading] = useState(true)
    const [popularClassesData, setPopularClassesData] = useState(true)
    useEffect(() => {
       axios.get("/popularclasses")
    .then(response=>{
        setPopularClassesData(response.data)
        setLoading(false)
    })
    }, []);
    return (
        <>
{/* <section className='mt-20'>
<h1 className='text-4xl py-12 text-center'>Popular Classes</h1>

<div className='grid grid-cols-3 gap-6 px-[5%] '>

{loading?<Spinner/>: popularClassesData.map(e=>{
return  <PopularClassesCard _id = {e._id} instructorname = {e.instructorname} instructoremail = {e.instructoremail} classname = {e.classname} availableseat = {e.availableseat} price = {e.price} image = {e.image} status = {e.status} feedback = {e.feedback} enrolledstudents = {e.enrolledstudents}/>
})}
</div>
</section> */}
<div class="bg-white">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-xl font-bold text-gray-900">Classes List</h2>
    <div class="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-2">
    {loading ? <>
                <Spinner />
              </> : <>
                {popularClassesData.map(e => { 
                  return <>
              <PopularClassesCard data={e} />
                  </>
                })}
              </>}
    
   
      

     
    </div>
  </div>
</div>
        </>
    );
}

export default PopularClassesComponent;
