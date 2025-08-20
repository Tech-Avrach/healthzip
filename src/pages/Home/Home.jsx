import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './Components/Hero';
import PopularCategories from './Components/PopularCategories';
import TrendingBlogs from './Components/TrendingBlogs';
import LatestBlog from './Components/LatestBlog';
import FAQAccordion from './Components/FAQAccordion';
import ContactPopup from '../../component/ContactPopup';

function Home() {
  const trendingRef = useRef(null);
  const navigate = useNavigate();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [destinationUrl, setDestinationUrl] = useState(null);

  const scrollToTrending = () => {
    trendingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePostClick = (url) => {
    const savedData = localStorage.getItem('contactFormData');
    if (savedData) {
      const { timestamp } = JSON.parse(savedData);
      const twoHours = 2 * 60 * 60 * 1000;
      if (Date.now() - timestamp < twoHours) {
        navigate(url);
      } else {
        localStorage.removeItem('contactFormData');
        setDestinationUrl(url);
        setIsContactPopupOpen(true);
      }
    } else {
      setDestinationUrl(url);
      setIsContactPopupOpen(true);
    }
  };

  const handleClosePopup = () => {
    setIsContactPopupOpen(false);
  };

  const handleSuccess = () => {
    setIsContactPopupOpen(false);
    if (destinationUrl) {
      navigate(destinationUrl);
    }
  };

  return (
    <div>
      <HeroSection onStartReadingClick={scrollToTrending} />
      {/* <PopularCategories /> */}
      <div ref={trendingRef}>
        <TrendingBlogs onPostClick={handlePostClick} />
      </div>
      <LatestBlog onPostClick={handlePostClick} />
      <FAQAccordion />
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={handleClosePopup}
        onSuccess={handleSuccess}
      />
    </div>
  );
}

export default Home;