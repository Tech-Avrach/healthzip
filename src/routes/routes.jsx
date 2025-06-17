import Navbar from '@/component/Navbar';
import BreakfastQuiz from '@/pages/blog/Blog1';
import SleepHeartHealthArticle from '@/pages/blog/Blog2';
import CarnieWilsonDepressionArticle from '@/pages/blog/Blog3';
import HealthierMiniDesserts from '@/pages/blog/Blog4';
import SummerColdSnacksGuide from '@/pages/blog/Blog5';
import LowerAbdominalPainGuide from '@/pages/blog/Blog6';
import PaleoDessertRecipes from '@/pages/blog/Blog7';
import DairyFreeDessertsGuide from '@/pages/blog/Blog8';
import BreastCancerContact from '@/pages/BreastCancer/BreastCancerContact';
import CancerCare from '@/pages/CancerCare/CancerCare';
import CancerCareTeamGuide from '@/pages/CancerCare/ccrBlog/Blog1';
import ManagingSideEffectsDuringTreatment from '@/pages/CancerCare/ccrBlog/Blog2';
import BuildingSupportNetwork from '@/pages/CancerCare/ccrBlog/Blog3';
import ComprehensiveCancerCareGuide from '@/pages/CancerCare/ccrBlog/Blog4';
import CancerTreatmentOptionsGuide from '@/pages/CancerCare/treatment/Blog1';
import CancerCareQuestionsGuide from '@/pages/CancerCare/treatment/Blog2';
import CancerTreatmentGuide from '@/pages/CancerCare/treatment/Blog3';
import ManagingCancerTreatmentSideEffects from '@/pages/CancerCare/treatment/Blog4';
import DigestiveTreatmentOptions from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog1';
import GastroenterologyQuestionsGuide from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog2';
import PatientDigestiveJourney from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog3';
import DigestiveHealthGuide from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog4';
import DigestiveCareSupportNetwork from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog5';
import GutHealthNutritionGuide from '@/pages/DigestiveHealth/DigestiveCareTreatments/Blog6';
import DigestiveHealth from '@/pages/DigestiveHealth/DigestiveHealth';
import DigestiveCareTeamGuide from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog1';
import ManagingDigestiveConditions from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog2';
import DigestiveHealthSupportResources from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog3';
import DigestiveHealthPrevention from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog4';
import ComprehensiveDigestiveHealthGuide from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog5';
import ComprehensiveDigestiveEvaluations from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog6';
import GastroenterologistConsultationGuide from '@/pages/DigestiveHealth/DigestiveHealthResources/Blog8';
import EyeHealth from '@/pages/EyeHealth/EyeHealth';
import BestVegan from '@/pages/Featured/BestVegan/BestVegan';
import Healthylifestyle from '@/pages/Featured/Healthylifesyle/Healthylifestyle';
import Lifestyle from '@/pages/Featured/Lifestyle/Lifestyle';
import Longerlife from '@/pages/Featured/Longerlife/Longerlife';
import MultiVmens from '@/pages/Featured/multiVmens/MultiVmens';
import MultiVwomens from '@/pages/Featured/MultiVwomens/MultiVwomens';
import BreastCancer from '@/pages/health-conditions/BreastCancer/BreastCancer';
import BreastCancerScreeningGuide from '@/pages/health-conditions/BreastCancer/earlyDetection/Blog1';
import BreastCancerGuide from '@/pages/health-conditions/BreastCancer/earlyDetection/Blog2';
import BreastSelfExamGuide from '@/pages/health-conditions/BreastCancer/earlyDetection/Blog3';
import BreastCancerRiskFactors from '@/pages/health-conditions/BreastCancer/earlyDetection/Blog4';
import BreastCancerTreatmentsGuide from '@/pages/health-conditions/BreastCancer/treatments/Blog1';
import OncologistQuestionsGuide from '@/pages/health-conditions/BreastCancer/treatments/Blog2';
import ChemoGuide from '@/pages/health-conditions/BreastCancer/treatments/Blog3';
import AdjuvantTherapyGuide from '@/pages/health-conditions/BreastCancer/treatments/Blog4';
import BreastReconstructionGuide from '@/pages/health-conditions/BreastCancer/treatments/Blog6';
import Home from '@/pages/Home/Home';
import HeartDiseaseGenderDifferences from '@/pages/latestBlog/Blog1';
import HomeSanctuaryGuide from '@/pages/latestBlog/Blog2';
import HeartHealthyFoodsQuiz from '@/pages/latestBlog/Blog3';
import BloodPressureFAQs from '@/pages/latestBlog/Blog4';
import BoostVeggieIntake from '@/pages/latestBlog/Blog5';
import HeartHealthyExercisesGuide from '@/pages/latestBlog/Blog6';
import MentalHealth from '@/pages/MentalHealth/MentalHealth';
import Migraine from '@/pages/Migraine/Migraine';
import LowCarbVegetablesGuide from '@/pages/recentPost/Blog1';
import FruitVegetableSafetyGuide from '@/pages/recentPost/Blog2';
import CreativeVegetableWays from '@/pages/recentPost/Blog3';
import VegetableHeartHealthGuide from '@/pages/recentPost/Blog4';
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

      <Route path="/blog/break-fast-quiz" element={<BreakfastQuiz />} />

      <Route path="/blog/sleep-heart-health-article" element={<SleepHeartHealthArticle />} />

      <Route path="/blog/carnie-wilson-depression-article" element={<CarnieWilsonDepressionArticle />} />

      <Route path="/blog/healthier-mini-desserts" element={<HealthierMiniDesserts />} />

      <Route path="/blog/summer-cold-snacks-guide" element={<SummerColdSnacksGuide />} />

   
      <Route path="/blog/lower-abdominal-pain-guide" element={<LowerAbdominalPainGuide />} />
      
      <Route path="/blog/parleo-dessert-recipes" element={<PaleoDessertRecipes />} />

      <Route path="/blog/dairy-free-dessert-recipes" element={<DairyFreeDessertsGuide />} />

      

      <Route path="/recent-post/low-carb-vegetables-guide" element={<LowCarbVegetablesGuide />} />

      <Route path="/recent-post/fruit-vegetable-safety-guide" element={<FruitVegetableSafetyGuide />} />
      

      <Route path="/recent-post/creative-vegetable-ways" element={<CreativeVegetableWays />} />
      
      <Route path="/recent-post/vegetable-heart-health-guide" element={<VegetableHeartHealthGuide />} />
      
      <Route path="/latest-blog/heart-disease-gender-differences" element={<HeartDiseaseGenderDifferences />} />
      
      <Route path="/latest-blog/home-sanctuary-guide" element={<HomeSanctuaryGuide />} />


      <Route path="/latest-blog/heart-healthy-foods-quiz" element={<HeartHealthyFoodsQuiz />} />
   
      <Route path="/latest-blog/blood-pressure-faqs" element={<BloodPressureFAQs />} />


      <Route path="/latest-blog/boost-veggie-intake" element={<BoostVeggieIntake />} />

      <Route path="/latest-blog/heart-healthy-exercises-guide" element={<HeartHealthyExercisesGuide />} />

      <Route path="/health-conditions/breast-cancer/treatments/oncologist-questions-guide" element={<OncologistQuestionsGuide />} />
      <Route path="/health-conditions/breast-cancer/treatments/breast-cancer-treatments-guide" element={<BreastCancerTreatmentsGuide />} />


      <Route path="/health-conditions/breast-cancer/treatments/chemo-guide" element={<ChemoGuide />} />
      
      <Route path="/health-conditions/breast-cancer/treatments/adjuvant-therapy-guide" element={<AdjuvantTherapyGuide />} />


<Route path="/health-conditions/breast-cancer/treatments/breast-cancer-therapy-guide" element={<BreastCancerTreatmentsGuide />} />

<Route path="/health-conditions/breast-cancer/treatments/breast-reconstruction-guide" element={<BreastReconstructionGuide />} />

<Route path="/health-conditions/breast-cancer/early-detection/breast-reconstruction-guide" element={<BreastCancerScreeningGuide />} />

<Route path="/health-conditions/breast-cancer/early-detection/breast-cancer-guide" element={<BreastCancerGuide />} />

<Route path="/health-conditions/breast-cancer/early-detection/breast-self-exam-guide" element={<BreastSelfExamGuide />} />


<Route path="/health-conditions/breast-cancer/early-detection/breast-cancer-risk-factors" element={<BreastCancerRiskFactors />} />


<Route path="/health-conditions/cancer-care/cancer-care-resources/cancer-care-team-guide" element={<CancerCareTeamGuide />} />
      
<Route path="/health-conditions/cancer-care/cancer-care-resources/managing-side-effects-during-treatment" element={<ManagingSideEffectsDuringTreatment />} />

<Route path="/health-conditions/cancer-care/cancer-care-resources/building-support-network" element={<BuildingSupportNetwork />} />

<Route path="/health-conditions/cancer-care/cancer-care-resources/comprehensive-cancer-care-guide" element={<ComprehensiveCancerCareGuide />} />

<Route path="/health-conditions/cancer-care/treatment/cancer-treatment-options-guide" element={<CancerTreatmentOptionsGuide />} />

<Route path="/health-conditions/cancer-care/treatment/cancer-care-questions-guide" element={<CancerCareQuestionsGuide />} />

<Route path="/health-conditions/cancer-care/treatment/cancer-treatment-guide" element={<CancerTreatmentGuide />} />


<Route path="/health-conditions/cancer-care/treatment/managing-cancer-treatment-side-effects" element={<ManagingCancerTreatmentSideEffects />} />



<Route path="/health-conditions/digestive-health/digestive-health-resources/digestive-care-team-guide" element={<DigestiveCareTeamGuide />} />

<Route path="/health-conditions/digestive-health/digestive-health-resources/managing-digestive-conditions" element={<ManagingDigestiveConditions />} />

DigestiveHealthSupportResources

<Route path="/health-conditions/digestive-health/digestive-health-resources/digestive-health-support-resources" element={<DigestiveHealthSupportResources />} />

<Route path="/health-conditions/digestive-health/digestive-health-resources/digestive-health-prevention" element={<DigestiveHealthPrevention />} />

<Route path="/health-conditions/digestive-health/digestive-health-resources/comprehensive-digestive-health-guide" element={<ComprehensiveDigestiveHealthGuide />} />


<Route path="/health-conditions/digestive-health/digestive-health-resources/comprehensive-digestive-evaluations" element={<ComprehensiveDigestiveEvaluations />} />



<Route path="/health-conditions/digestive-health/digestive-health-resources/gastroenterologist-consultation-guide" element={<GastroenterologistConsultationGuide />} />

<Route path="/health-conditions/digestive-health/digestive-care-treatments/digestive-treatment-options" element={<DigestiveTreatmentOptions />} />


<Route path="/health-conditions/digestive-health/digestive-care-treatments/gastroenterology-questions-guide" element={<GastroenterologyQuestionsGuide />} />

<Route path="/health-conditions/digestive-health/digestive-care-treatments/patient-digestive-journey" element={<PatientDigestiveJourney />} />



<Route path="/health-conditions/digestive-health/digestive-care-treatments/digestive-health-guide" element={<DigestiveHealthGuide />} />


<Route path="/health-conditions/digestive-health/digestive-care-treatments/digestive-care-supportn-network" element={<DigestiveCareSupportNetwork />} />


<Route path="/health-conditions/digestive-health/digestive-care-treatments/gut-health-nutrition-guide" element={<GutHealthNutritionGuide />} />

    </Routes>
    </>
  );
};

export default AllRoutes;
