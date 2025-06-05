import Navbar from '@/component/Navbar';
import BreastCancerContact from '@/pages/BreastCancer/BreastCancerContact';
import CancerCare from '@/pages/CancerCare/CancerCare';
import DigestiveHealth from '@/pages/DigestiveHealth/DigestiveHealth';
import EyeHealth from '@/pages/EyeHealth/EyeHealth';
import BestVegan from '@/pages/Featured/BestVegan/BestVegan';
import Healthylifestyle from '@/pages/Featured/Healthylifesyle/Healthylifestyle';
import Lifestyle from '@/pages/Featured/Lifestyle/Lifestyle';
import Longerlife from '@/pages/Featured/Longerlife/Longerlife';
import MultiVmens from '@/pages/Featured/multiVmens/MultiVmens';
import MultiVwomens from '@/pages/Featured/MultiVwomens/MultiVwomens';
import BreastCancer from '@/pages/health-conditions/BreastCancer/BreastCancer';
import Home from '@/pages/Home/Home';
import MentalHealth from '@/pages/MentalHealth/MentalHealth';
import Migraine from '@/pages/Migraine/Migraine';
import Cbd from '@/pages/wellness/cbd/Cbd';
import Fitness from '@/pages/wellness/cbd/Fitness/Fitness';
import Recipes from '@/pages/wellness/cbd/Recipes/Recipes';
import SexualHealth from '@/pages/wellness/cbd/SexualHealth/SexualHealth';
import SkinCare from '@/pages/wellness/cbd/SkinCare/SkinCare';
import SleepHealth from '@/pages/wellness/cbd/SleepHealth/SleepHealth';
import React from 'react';
import { Routes, Route } from 'react-router-dom';



const AllRoutes = () => {
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/health-conditions/breast-cancer" element={<BreastCancer />} />
        <Route path="/health-conditions/migraine" element={<Migraine />} />
        <Route path="/health-conditions/cancer-care" element={<CancerCare />} />
        <Route path="/health-conditions/digestive-health" element={<DigestiveHealth />} /> 
        <Route path="/health-conditions/eye-health" element={<EyeHealth />} />
        <Route path="/health-conditions/mental-health" element={<MentalHealth />} />
        <Route path="/wellness/cbd" element={<Cbd/>} />
        <Route path="/wellness/fitness" element={<Fitness/>} />
        <Route path="/wellness/recipes" element={<Recipes />} />
        <Route path="/wellness/sexual-health" element={<SexualHealth />} />
        <Route path="/wellness/skin-care" element={<SkinCare />} />
        <Route path="/featured/healthy-lifestyle-tips" element={<Healthylifestyle />} />
        <Route path="/featured/longevity-tips" element={<Longerlife />} />
        <Route path="/featured/daily-health-tips" element={<Lifestyle />} />
        <Route path="/featured/vegan-meal-delivery" element={<BestVegan />} />
        <Route path="/featured/multivitamins-women" element={<MultiVwomens />} />
        <Route path="/featured/multivitamins-men" element={<MultiVmens />} />
        <Route path="/contact/breast-cancer" element={<BreastCancerContact />} />






    </Routes>
    </>
  );
};

export default AllRoutes;
