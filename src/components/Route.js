import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    const eventType = 'popstate';
    window.addEventListener(eventType, onLocationChange);

    return () => {
      window.removeEventListener(eventType, onLocationChange);
    }
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
