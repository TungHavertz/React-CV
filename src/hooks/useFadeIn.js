// src/hooks/useFadeIn.js
import { useEffect, useRef } from 'react';

const useFadeIn = (options = { threshold: 100 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const top = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - options.threshold) {
          ref.current.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kiểm tra ngay khi tải trang

    return () => window.removeEventListener('scroll', handleScroll);
  }, [options.threshold]); // Dependency để tái chạy nếu threshold thay đổi

  return ref;
};

export default useFadeIn;