import React, { useState, useEffect } from 'react';
import { Mail, User, Heart, ChevronRight, X, Star, Clock, Users, Shield, CheckCircle, Facebook, Twitter, Instagram, Youtube, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CompleteHealthNewsletterLayout() {
  const [email, setEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSignUp = () => {
    if (!email.trim()) return;
    setIsAnimating(true);
    setTimeout(() => {
      setShowSuccessMessage(true);
      setEmail('');
      setIsAnimating(false);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }, 1000);
  };

  const handleFooterSignUp = () => {
    if (!footerEmail.trim()) return;
    setShowSuccessMessage(true);
    setFooterEmail('');
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const treatments = [
    {
      id: 1,
      title: "Understanding Cancer Treatment Options: Surgery, Chemo, and Beyond",
      description: "Explore comprehensive cancer treatment approaches including surgery, chemotherapy, radiation therapy, immunotherapy, and targeted treatments...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      readTime: "8 min read",
      category: "Treatment Guide",
      link: "/health-conditions/cancer-care/treatment/cancer-treatment-options-guide"
    },
    {
      id: 2,
      title: "Essential Questions to Ask Your Cancer Care Team",
      description: "Prepare for appointments with your oncologist, nurses, and care coordinators with this comprehensive list of important questions...",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
      readTime: "6 min read",
      category: "Patient Guidance",
      link: '/health-conditions/cancer-care/treatment/cancer-care-questions-guide'
    },
    {
      id: 3,
      title: "Navigating Cancer Treatment: A Patient's Perspective",
      description: "Real experiences and practical advice from cancer survivors on managing treatment schedules, side effects, and emotional well-being...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
      readTime: "10 min read",
      category: "Patient Story",
      link: "/health-conditions/cancer-care/treatment/cancer-treatment-guide"
    },
    {
      id: 4,
      title: "Managing Cancer Treatment Side Effects",
      description: "Learn effective strategies to cope with common side effects including fatigue, nausea, pain, and emotional challenges during treatment...",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
      readTime: "7 min read",
      category: "Wellness Guide",
      link: "/health-conditions/cancer-care/treatment/managing-cancer-treatment-side-effects"
    },
    {
      id: 5,
      title: "Building Your Cancer Care Support Network",
      description: "Discover how to create a strong support system with family, friends, healthcare providers, and community resources...",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop",
      readTime: "5 min read",
      category: "Support Resources",
      link: "#"
    },
    {
      id: 6,
      title: "Nutrition During Cancer Treatment: What You Need to Know",
      description: "Essential nutrition guidelines, meal planning tips, and dietary strategies to support your body during cancer treatment...",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
      readTime: "9 min read",
      category: "Nutrition Guide",
      link: "#"
    }
  ];

  const earlyDetectionArticles = [
    {
      id: 7,
      title: "The Importance of Regular Cancer Screenings",
      description: "Learn about various cancer screening tests, when to get them, and how early detection can significantly improve treatment outcomes...",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
      readTime: "7 min read",
      category: "Prevention",
      link: "#"
    },
    {
      id: 8,
      title: "Understanding Cancer Risk Factors and Prevention",
      description: "Explore lifestyle factors, genetic predisposition, and environmental influences that affect cancer risk and prevention strategies...",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop",
      readTime: "8 min read",
      category: "Risk Assessment",
      link: "#"
    },
    {
      id: 9,
      title: "Recognizing Cancer Warning Signs and Symptoms",
      description: "Learn to identify potential cancer symptoms and understand when to seek medical attention for concerning changes in your health...",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
      readTime: "6 min read",
      category: "Health Awareness",
      link: "#"
    },
    {
      id: 10,
      title: "Family History and Genetic Testing for Cancer",
      description: "Understanding hereditary cancer syndromes, genetic counseling, and testing options for those with family history of cancer...",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=300&h=200&fit=crop",
      readTime: "9 min read",
      category: "Genetic Health",
      link: "#"
    }
  ];

  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Privacy Settings", href: "#" },
      { name: "Advertising Policy", href: "#" },
      { name: "Health Topics", href: "#" }
    ],
    resources: [
      { name: "Sitemap", href: "#" },
      { name: "Medical Affairs", href: "#" },
      { name: "Content Integrity", href: "#" },
      { name: "Newsletters", href: "#" }
    ]
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 md:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-orange-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-60 left-1/2 w-8 h-8 bg-orange-300 rounded-full opacity-40 animate-ping" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Header Newsletter Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-8 mb-12 relative overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-20 translate-y-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="flex items-center mb-4 animate-fadeIn">
                <Heart className="w-8 h-8 mr-3 text-pink-300 animate-pulse" />
                <h1 className="text-4xl font-bold">Get Our Weekly Cancer Care Newsletter</h1>
              </div>
              <p className="text-teal-100 mb-6 text-lg leading-relaxed">
                Join over 150K subscribers in receiving expert guidance on cancer treatment, care management, survivor stories, and the latest medical breakthroughs.
              </p>
              
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  disabled={isAnimating}
                  className={`bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isAnimating ? 'animate-spin' : ''
                  }`}
                >
                  {isAnimating ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : 'SIGN UP'}
                </button>
              </div>
              
              <p className="text-teal-200 text-sm mt-4 opacity-75">Your privacy is important to us</p>
            </div>
            
            <div className="relative">
              <div className="relative z-10 animate-fadeIn" style={{animationDelay: '0.5s'}}>
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
                  alt="Cancer care support"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <Heart className="w-6 h-6 text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="mb-16 animate-fadeIn" style={{animationDelay: '1s'}}>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mr-4">CANCER CARE & TREATMENT</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-300 to-orange-300 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={treatment.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => setSelectedArticle(treatment)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {treatment.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {treatment.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {treatment.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      <span>2.1k readers</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-teal-600 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Early Detection Section */}
        <div className="mb-12 animate-fadeIn" style={{animationDelay: '1.5s'}}>
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-purple-600 mr-4 animate-pulse" />
            <h2 className="text-3xl font-bold text-gray-800 mr-4">PREVENTION & EARLY DETECTION</h2>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-300 to-orange-300 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {earlyDetectionArticles.map((article, index) => (
              <div
                key={article.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden animate-slideUp"
                style={{animationDelay: `${index * 0.15 + 1.5}s`}}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="md:flex">
                  <div className="md:w-40 md:flex-shrink-0 relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}

      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-6 right-6 bg-green-500 text-white rounded-2xl shadow-2xl p-4 flex items-center animate-slideIn z-50">
          <CheckCircle className="w-6 h-6 mr-3" />
          <span className="font-medium">Successfully subscribed to newsletter!</span>
        </div>
      )}

      {/* Pop-up Notification */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-slideIn z-50 border border-purple-100">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-purple-500 to-orange-500 rounded-full p-2 mr-3">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-gray-800">New Article Alert!</h4>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-3">
            "Understanding Cancer Treatment Options" just published!
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Read Now
          </button>
        </div>
      )}

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slideUp">
            <div className="relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full p-2 hover:bg-opacity-100 transition-all duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                  {selectedArticle.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {selectedArticle.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedArticle.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{selectedArticle.description}</p>
              <div className="border-t pt-6">
                <Link to={selectedArticle.link}>
                <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Continue Reading
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}