import { useEffect, useRef, useState } from 'react';

function useReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const threshold = options.threshold ?? 0.18;
  const rootMargin = options.rootMargin ?? '0px 0px -40px 0px';

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, isVisible };
}

export default useReveal;
