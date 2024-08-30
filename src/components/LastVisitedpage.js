import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("lastVisitedPage", location.pathname);
  }, [location]);
};

export default usePageTracker;
