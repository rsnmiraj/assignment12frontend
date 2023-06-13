import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import PricingAdmission from '../../Component/PricingAdmission/PricingAdmission';
import PopularClassesCard from '../../Component/PopularClassesCard/PopularClassesCard'; 
import InstrumentGallery from '../../Component/InstrumentGallery/InstrumentGallery';
import ClassesCard from '../../Component/ClassesCard/ClassesCard';
import PopularClassesComponent from '../../Component/HomePageComponents/PopularClassesComponent/PopularClassesComponent';
import PopularInstructor from '../../Component/PopularInstructor/PopularInstructor';
 

 

 
const HomePage = ({setTitle}) => {
  const [loading, setLoading] = useState(true)
const [toyData, setToyData] = useState(null); 
  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);

 

  return (


    <> 


 

 <PopularClassesComponent/>
<PopularInstructor/>

 
 <div className="container max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-wrap">
 
 </div> </div>
 <PricingAdmission/>

<InstrumentGallery/>
    
    <div className='grid grid-cols-3 px-12 gap-6'>


    </div>
    </>



  );
}

export default HomePage;
