import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 z-50 right-4 bg-[#007A5C] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default BackToTop;
